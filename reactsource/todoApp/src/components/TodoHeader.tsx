// import React from "react";
// import type { Header } from "../types/todo";

function TodoHeader({ getodosByCompleted }: { getodosByCompleted: (completed: string) => void }) {
  console.log("TodoHeader rendered");
  return (
    <div className="flex p-3">
      <span className="flex-1 text-left text-orange-700">중요 일정은 체크</span>
      <div className="shrink-0">
        <span>완료</span>
        <select
          name="completed"
          className="mx-2 rounded border border-gray-400"
          onChange={(e) => getodosByCompleted(e.target.value)}
        >
          {[
            { label: "전체", value: "" },
            { label: "완료", value: "true" },
            { label: "미완료", value: "false" },
          ].map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TodoHeader;
