import { useState } from "react";
import "./App.css";
import MainTask from "./components/MainTask";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainTask />
    </>
  );
}

export default App;
