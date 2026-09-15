import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavi from "./components/common/TopNavi";
import UseStateExam from "./components/01-useState/UseStateExam";
import UseReducerExam1 from "./components/02-useReducer/UseReducerExam1";

function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/" element={<UseStateExam />} />
        <Route path="/use-state" element={<UseStateExam />} />
        <Route path="/use-reducer1" element={<UseReducerExam1 />} />
      </Routes>
    </>
  );
}

export default App;
