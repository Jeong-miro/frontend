import { useRef, useState } from "react";
import { Check, Code2, Copy, LoaderCircle, RotateCcw, Sparkles } from "lucide-react";
import { sendMessage } from "../lib/response";

const CODE_INSTRUCTIONS = `당신은 React와 TypeScript 전문 개발자입니다.
사용자의 요구사항에 맞는 읽기 쉽고 실행 가능한 React 코드를 작성하세요.
함수형 컴포넌트와 React Hooks를 사용하고, 타입과 접근성을 고려하세요.
스타일은 Tailwind CSS를 사용하며 불필요한 외부 패키지는 사용하지 마세요.
별도 요청이 없으면 하나의 완전한 TSX 파일로 작성하세요.
마크다운 코드 펜스나 코드 외부의 설명 없이 코드만 출력하세요.
설명이 필요한 경우 한국어 코드 주석으로 작성하세요.`;

function CodeGenerator() {
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");
  const requestInFlight = useRef(false);

  const handleGenerate = async () => {
    const message = prompt.trim();
    if (!message || requestInFlight.current) return;

    requestInFlight.current = true;
    setLoading(true);
    setCode("");
    setError("");
    setCopyStatus("idle");

    try {
      const result = await sendMessage({
        message,
        instructions: CODE_INSTRUCTIONS,
        onDelta: (text) => setCode((previous) => previous + text),
      });
      setCode(result.text);
    } catch (cause) {
      setError(
        cause instanceof Error
          ? `코드를 생성하지 못했습니다. ${cause.message}`
          : "코드를 생성하지 못했습니다. 잠시 후 다시 시도해 주세요.",
      );
    } finally {
      requestInFlight.current = false;
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!code || loading) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  };

  const handleReset = () => {
    if (requestInFlight.current) return;
    setPrompt("");
    setCode("");
    setError("");
    setCopyStatus("idle");
  };

  return (
    <section className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-white text-slate-800" aria-labelledby="code-generator-title">
      <header className="border-b border-slate-200 px-5 py-5 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <Code2 size={22} aria-hidden="true" />
          </div>
          <div>
            <h1 id="code-generator-title" className="text-lg font-semibold tracking-tight">Code Generator</h1>
            <p className="mt-1 text-sm text-slate-400">요구사항을 입력하면 React와 TypeScript 코드를 생성합니다.</p>
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-6 md:px-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <label htmlFor="code-generator-prompt" className="text-sm font-semibold text-slate-800">코드 생성 요구사항</label>
          <p id="code-generator-hint" className="mt-2 text-xs leading-5 text-slate-500">필요한 기능, 화면 구성, 동작을 구체적으로 설명해 주세요.</p>
          <textarea
            id="code-generator-prompt"
            aria-describedby="code-generator-hint"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            disabled={loading}
            rows={10}
            placeholder="예: 할 일을 추가하고 완료 처리할 수 있는 반응형 Todo 컴포넌트를 만들어 줘."
            className="mt-4 min-h-56 w-full resize-y rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50 disabled:opacity-60"
          />
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
            >
              {loading ? <LoaderCircle size={17} className="animate-spin" aria-hidden="true" /> : <Sparkles size={17} aria-hidden="true" />}
              {loading ? "생성 중…" : "Generate"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RotateCcw size={17} aria-hidden="true" />Reset
            </button>
          </div>
          <p role="status" className="mt-3 text-xs text-slate-500">{loading ? "코드를 실시간으로 생성하고 있습니다." : ""}</p>
          {error && <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm leading-6 text-red-700">{error}</p>}
        </div>

        <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
            <h2 id="code-generator-result" className="text-sm font-semibold">생성된 코드</h2>
            <button
              type="button"
              onClick={handleCopy}
              disabled={loading || !code}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {copyStatus === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              {copyStatus === "copied" ? "Copied" : "Copy"}
            </button>
          </div>
          <div aria-busy={loading}>
            {code ? (
              <pre tabIndex={0} aria-labelledby="code-generator-result" className="max-h-[65vh] min-h-80 overflow-auto bg-slate-50 p-5 text-sm leading-6 text-slate-700 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-400"><code>{code}</code></pre>
            ) : (
              <div className="flex min-h-80 items-center justify-center bg-slate-50 px-5 text-center text-sm text-slate-400">{loading ? "첫 번째 코드 응답을 기다리고 있습니다…" : "생성된 코드가 여기에 표시됩니다."}</div>
            )}
          </div>
          <p role="status" className={`px-5 py-3 text-xs ${copyStatus === "failed" ? "text-red-600" : "text-slate-500"}`}>
            {copyStatus === "copied" && "코드를 클립보드에 복사했습니다."}
            {copyStatus === "failed" && "복사하지 못했습니다. 브라우저 권한을 확인하거나 코드를 직접 선택해 복사해 주세요."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CodeGenerator;
