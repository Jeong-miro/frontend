import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavi from "./components/TopNavi";
import ReduxBasicApp from "./features/counter/ReduxBasicApp";
import CommentsApp from "./features/comments/CommentsApp";
import TodoApp from "./features/todo/TodoApp";

function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/" element={<ReduxBasicApp />} />
        <Route path="/redux-basic" element={<ReduxBasicApp />} />
        <Route path="/comments" element={<CommentsApp />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </>
  );
}

export default App;
