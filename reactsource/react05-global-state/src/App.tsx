import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavi from "./components/common/TopNavi";
import UseStateExam from "./components/01-useState/UseStateExam";
import UseReducerExam1 from "./components/02-useReducer/UseReducerExam1";
import UseReducerExam2 from "./components/02-useReducer/UseReducerExam2";
import UseReducerExam3 from "./components/02-useReducer/UseReducerExam3";
import TodoMain from "./components/todo/TodoMain";
import UseContextExam1 from "./components/03-userContext/UseContextExam1";
import UseCountExam2 from "./components/03-userContext/UseCountExam2";

function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/" element={<UseStateExam />} />
        <Route path="/use-state" element={<UseStateExam />} />
        <Route path="/use-reducer1" element={<UseReducerExam1 />} />
        <Route path="/use-reducer2" element={<UseReducerExam2 />} />
        <Route path="/use-reducer3" element={<UseReducerExam3 />} />
        <Route path="/use-reducer" element={<TodoMain />} />
        <Route path="/use-context1" element={<UseContextExam1 />} />
        <Route path="/use-context2" element={<UseCountExam2 />} />
      </Routes>
    </>
  );
}

export default App;
