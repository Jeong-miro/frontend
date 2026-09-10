import React from "react";
import { Link, NavLink } from "react-router-dom";

const TopNavi = () => {
  return (
    <nav className="flex bg-gray-300 p-2 gap-5 h-20 items-center">
      <a href="/">Home</a>
      {/* end : 내 to 경로와 정확히 끝까지 일치할 경우에만 active */}
      <NavLink to="/intro" end>
        {({ isActive }) => <span className={isActive ? "px-4 py-2 text-blue-600 font-semibold" : ""}>인트로</span>}
      </NavLink>
      <NavLink
        to="/intro/router"
        className={({ isActive }) => (isActive ? "px-4 py-2 text-blue-600 font-semibold" : "")}
      >
        Router 관련 Hook
      </NavLink>
      <Link to="/xyz">잘못된 Link</Link>
    </nav>
  );
};

export default TopNavi;
