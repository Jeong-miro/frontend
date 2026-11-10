import { Bot, ChevronDown, MoreHorizontal } from "lucide-react";

function ChatHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-5 md:px-8">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 md:hidden">
          <Bot size={20} />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-semibold text-slate-800">AI Assistant</h1>

            <ChevronDown size={15} className="text-slate-400" />
          </div>

          <p className="mt-0.5 text-xs text-slate-400">OpenAI Responses API</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-emerald-700">Ready</span>
        </div>

        <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700">
          <MoreHorizontal size={20} />
        </button>
      </div>
    </header>
  );
}

export default ChatHeader;
