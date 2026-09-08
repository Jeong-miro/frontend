import React, { useState } from "react";

const InputMultipleSample = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  // 구조분해
  const { name, nickname } = inputs;
  // input 여러개를 하나의 state로 관리
  // {name:"홍길동",nickname:'의적'}
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 이벤트 대상은 누구인가?
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };
  return (
    <div>
      <input type="text" name="name" onChange={handleChange} value={name} />
      <input type="text" name="nickname" onChange={handleChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <h2>
        현재값 : {name}({nickname})
      </h2>
    </div>
  );
};

export default InputMultipleSample;
