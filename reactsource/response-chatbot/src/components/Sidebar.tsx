import { MessageSquare, Plus, Settings, Sparkles, PanelLeftClose, Code2 } from "lucide-react";
import type { Page } from "../App";

interface SidebarProps {
  onNewChat: () => void;
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

function Sidebar({ onNewChat, currentPage, onPageChange }: SidebarProps) {
  const menuClassName = (page: Page) =>
    `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${currentPage === page ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-200/70"}`;
  return (
    <aside className="hidden h-screen w-65 shrink-0 flex-col border-r border-slate-200 bg-slate-50 md:flex">
      {/* Logo */}
      <div className="flex h-16 items-center justify-between px-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <Sparkles size={17} />
          </div>

          <span className="font-semibold tracking-tight text-slate-800">Response Chat</span>
        </div>

        <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700">
          <PanelLeftClose size={18} />
        </button>
      </div>

      {/* New Chat */}
      <div className="px-4 pt-4">
        <button
          onClick={onNewChat}
          className="flex w-full items-center gap-2.5 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.98]"
        >
          <Plus size={18} />새 대화 시작
        </button>
      </div>

      {/* 페이지 메뉴 - Code Generator 메뉴 보여주기 */}
      <div className="px-4 pt-4">
        <button
          onClick={() => onPageChange("chat")}
          className="flex w-full items-center gap-2.5 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.98]"
        >
          <MessageSquare size={16} />
          Chat
        </button>

        <button
          onClick={() => onPageChange("generator")}
          className="flex w-full items-center gap-2.5 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.98]"
        >
          <Code2 size={16} />
          Code Generator
        </button>
      </div>

      {/* History */}
      <div className="flex-1 overflow-y-auto px-4 pt-8">
        <p className="mb-3 px-2 text-xs font-semibold tracking-wider text-slate-400">최근 대화</p>

        <div className="space-y-1">
          <button onClick={() => onPageChange("chat")} className={menuClassName("chat")}>
            <MessageSquare size={16} />
            <span className="truncate">새로운 대화</span>
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-600 transition hover:bg-slate-200/70">
            <MessageSquare size={16} />
            <span className="truncate">Responses API 알아보기</span>
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-600 transition hover:bg-slate-200/70">
            <MessageSquare size={16} />
            <span className="truncate">React 프로젝트 만들기</span>
          </button>
        </div>
      </div>

      {/* User Profile */}
      <div className="border-t border-slate-200 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition hover:bg-slate-200/70">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
            U
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-slate-800">User</p>
            <p className="text-xs text-slate-400">Personal workspace</p>
          </div>

          <Settings size={17} className="text-slate-400" />
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
