import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./declarative/nav2/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>,
);
