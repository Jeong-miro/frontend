import { NavLink } from "react-router-dom";

const TopNavi = () => {
  return (
    <nav className="flex bg-gray-300 p-2 gap-5 h-20 items-center">
      <NavLink to="/redux-basic">ReduxBasicApp</NavLink>
      <NavLink to="/comments">CommentsApp</NavLink>
      <NavLink to="/todo">TodoApp</NavLink>
    </nav>
  );
};

export default TopNavi;
