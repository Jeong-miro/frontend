import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import MyPage from "./components/MyPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
