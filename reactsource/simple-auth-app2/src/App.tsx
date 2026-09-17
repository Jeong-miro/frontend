import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import MyPage from "./components/MyPage";
import Navigation from "./components/Navigation";
import ProtectedRouter from "./common/ProtectedRouter";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRouter />}>
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
