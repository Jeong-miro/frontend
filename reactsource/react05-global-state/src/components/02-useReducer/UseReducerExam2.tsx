import React, { useReducer } from "react";
import { counterReducer, initState, type CountActionType, type CountAction } from "./counter.reducer";

const UseReducerExam2 = () => {
  const [state, dispatch] = useReducer(counterReducer, initState);

  const handleClick = (type: CountActionType, value: number) => {
    dispatch({
      type: type,
      payload: { value },
    });
  };
  return (
    <div>
      <p>Count : {state.count}</p>
      <button className="bg-gray-400 p-2 mx-1" onClick={() => handleClick("INC", 1)}>
        +1
      </button>
      <button className="bg-gray-400 p-2 mx-1" onClick={() => handleClick("DEC", 1)}>
        -1
      </button>
      <button className="bg-gray-400 p-2 mx-1" onClick={() => handleClick("INC", 2)}>
        +2
      </button>
      <button className="bg-gray-400 p-2 mx-1" onClick={() => handleClick("DEC", 2)}>
        -2
      </button>
    </div>
  );
};

export default UseReducerExam2;
