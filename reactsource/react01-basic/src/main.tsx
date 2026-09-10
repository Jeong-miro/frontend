import { createRoot } from "react-dom/client";
import UserForm from "./event/UserForm.tsx";
import "./index.css";
import MyComp from "./state/MyComp.tsx";

createRoot(document.getElementById("root")!).render(<MyComp />);
