import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavi from "./TopNavi";
import LifeCycle from "./LifeCycle";
import LocalJsonFetcher from "./LocalJsonFetcher";
import ExternalApiFetcher from "./ExternalApiFetcher";
import BookJsonFetcher from "./BookJsonFetcher";

function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/" element={<LifeCycle />} />
        <Route path="/local" element={<LocalJsonFetcher />} />
        <Route path="/external" element={<ExternalApiFetcher />} />
        <Route path="/info" element={<BookJsonFetcher />} />
      </Routes>
    </>
  );
}

export default App;
