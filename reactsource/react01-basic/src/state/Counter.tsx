import { useState } from "react";
const Counter = () => {
  // 함수
  //let count = 0;

  // set* 함수 : 변수값을 변경하는데 사용, 화면을 리페인팅 하라는 명령
  const [count, setCount] = useState(0);
  const increase = (e) => {
    setCount(count + 1);
    console.log(count);
  };
  const decrease = (e) => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" className="increase" onClick={increase}>
        +
      </button>
      <button type="button" className="decrease" onClick={decrease}>
        -
      </button>
    </div>
  );
};

export default Counter;
