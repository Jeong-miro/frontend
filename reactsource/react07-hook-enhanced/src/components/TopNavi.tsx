import { NavLink } from "react-router-dom";

const TopNavi = () => {
  return (
    <nav className="flex bg-gray-300 p-2 gap-5 h-20 items-center">
      <NavLink to="/use-optimistic">useOptimistic</NavLink>
      <NavLink to="/use-action-state">useActionState</NavLink>
      <NavLink to="/use-form-status">useFormStatus</NavLink>
    </nav>
  );
};

export default TopNavi;
