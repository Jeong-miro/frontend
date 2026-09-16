import type { ReactNode } from "react";

const TodoTeamplate = ({ children }: { children: ReactNode }) => {
  console.log("TodoTeamplate rendered");

  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="w-3/5 bg-cyan-800 p-3 text-center text-3xl text-white">일정 관리</div>
      <div className="w-3/5 bg-white">{children}</div>
    </div>
  );
};

export default TodoTeamplate;
