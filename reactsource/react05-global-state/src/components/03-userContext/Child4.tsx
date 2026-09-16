import { useContext } from "react";
import { OnoffContext } from "./CommonContext";

const Child4 = () => {
  const context = useContext(OnoffContext);
  if (!context) {
    throw new Error("OnoffContext null");
  }

  const { toggleOnof } = context;

  return (
    <div>
      <h2 className="text-3xl">Child4</h2>
      <button className="border px-4" onClick={toggleOnof}>
        isOn 변경
      </button>
    </div>
  );
};

const Child3 = () => {
  const context = useContext(OnoffContext);
  if (!context) {
    throw new Error("OnoffContext null");
  }

  const { isOn } = context;
  return (
    <div>
      <h2 className="text-3xl">Child3</h2>
      <Child4 />
      <p>isOn : {isOn ? "On" : "Off"}</p>
    </div>
  );
};

export default Child3;
