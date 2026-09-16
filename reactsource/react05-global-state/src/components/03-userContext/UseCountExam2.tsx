import Child1 from "./Child2";
import Child3 from "./Child4";
import CountProvider from "./CountProvider";
import OnOffProvider from "./OnOffProvider";

const UseCountExam2 = () => {
  return (
    <div>
      <CountProvider>
        <h2 className="text-3xl">CountContext</h2>
        <Child1 />
      </CountProvider>
      <OnOffProvider>
        <h2 className="text-3xl">ToggleContext</h2>
        <Child3 />
      </OnOffProvider>
    </div>
  );
};

export default UseCountExam2;
