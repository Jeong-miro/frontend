import { useReducer, useState } from "react";
import { bankReducer, initState, type BankActionType } from "./bank.reducer";

const UseReducerExam3 = () => {
  const [state, dispatch] = useReducer(bankReducer, initState);
  const [amount, setAmount] = useState(0);
  const handleClick = (type: BankActionType) => {
    dispatch({
      type: type,
      payload: { balance: amount },
    });
  };
  return (
    <div>
      <p>잔고 : {state.balance}</p>
      <input type="number" value={amount} step={1000} onChange={(e) => setAmount(parseInt(e.target.value))} />
      <button className="bg-gray-400 p-2 mx-1" onClick={() => handleClick("DEP")}>
        입금
      </button>
      <button className="bg-gray-400 p-2 mx-1" onClick={() => handleClick("WIT")}>
        출금
      </button>
    </div>
  );
};

export default UseReducerExam3;
