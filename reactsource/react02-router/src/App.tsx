import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavi from "./declarative/nav1/TopNavi";
import Home from "./declarative/nav1/Home";
import NotFound from "./declarative/nav1/NotFound";
import CommonLayout from "./declarative/nav1/CommonLayout";
import LayoutIndex from "./declarative/nav1/LayoutIndex";
import RouterHooks from "./declarative/nav1/RouterHooks";

// react-router-dom
// URL 관리, 이력관리

// http://localhost:5173/
// http://localhost:5173/intro
// http://localhost:5173/intro/router
// http://localhost:5173/xyz
function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<CommonLayout />}>
          {/* /intro로 오면 CommonLayout 으로 갈거고, 안의 정보는 LayoutIndex를 줄거야 
          중첩라우팅 (Outlet) */}
          <Route index element={<LayoutIndex />} />
          <Route path="router" element={<RouterHooks />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
