import { Bot, Check, Copy, User } from "lucide-react";
import type { ChatMessageType } from "../types/chat";
import { useState } from "react";

interface ChatMessageProps {
  message: ChatMessageType;
}

function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("클립보드 복사에 실패했습니다.");
    }
  };

  return (
    <>
      {/* user or Assistant 냐에 따라 오른쪽 끝 or 왼쪽 시작 */}
      <div className={`group flex gap-3 md:gap-4 ${isUser ? "justify-end" : "justify-start"}`}>
        {/* user 가 아닌 경우 */}
        {!isUser && (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
            <Bot size={19} />
          </div>
        )}
        {/* user or Assistant 냐에 정렬 방식 */}
        <div className={`flex max-w-[85%] flex-col  md:max-w-[75%] ${isUser ? "items-end " : "items-start"}`}>
          <div className="mb-1.5 flex items-center gap-2 px-1">
            <span className="text-xs font-semibold text-slate-600">{isUser ? "You" : "Assistant"}</span>

            <span className="text-[11px] text-slate-400">
              {message.createdAt.toLocaleDateString("ko-KR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          {/*  user 가 있다면 rounded-tr-sm bg-indigo-600 text-white
             없다면 rounded-tl-sm border border-slate-100 bg-slate-50 text-slate-700    */}
          <div
            className={`rounded-2xl px-4 py-3 text-sm leading-7 ${isUser ? "rounded-tr-sm bg-indigo-600 text-white" : "rounded-tl-sm border border-slate-100 bg-slate-50 text-slate-700"}   `}
          >
            {/* content 보여주기 */}
            <p className="whitespace-pre-wrap wrap-break-word">{message.content}</p>
          </div>

          {!isUser && (
            <button
              onClick={handleCopy}
              className="mt-2 flex items-center gap-1.5 px-1 text-xs text-slate-400 opacity-0 transition hover:text-indigo-600 group-hover:opacity-100"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? "복사 완료" : "복사"}
            </button>
          )}
        </div>
        {isUser && (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-200 text-slate-600">
            <User size={18} />
          </div>
        )}
      </div>
    </>
  );
}

export default ChatMessage;
