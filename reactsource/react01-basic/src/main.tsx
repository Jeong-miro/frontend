import { createRoot } from "react-dom/client";
import "./index.css";
import ParentCardLayout from "./props/ParentCardLayout.tsx";
import MyComp from "./props/MyComp.tsx";
import Product from "./props/Product.tsx";
import Counter from "./state/Counter.tsx";

createRoot(document.getElementById("root")!).render(<Counter />);
