import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavi from "./TopNavi";
import LifeCycle from "./LifeCycle";

function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/" element={<LifeCycle />} />
      </Routes>
    </>
  );
}

export default App;
