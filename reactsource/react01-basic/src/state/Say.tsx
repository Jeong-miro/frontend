import React, { useState } from "react";

const Say = () => {
  // 입장버튼을 누르면 안녕하세요 라는 글자 보이기
  // 퇴장버튼을 누르면 안녕히가세요 라는 글자 보이기
  const [message, setMessage] = useState("");

  // message 색상 변경
  const [color, setColor] = useState("black");

  // 입장
  const onClickEnter = () => setMessage("안녕하세요");
  // 퇴장
  const onClickLeave = () => setMessage("안녕히 가세요");
  // 색상변경
  const changeColor = (c) => setColor(c);

  return (
    <div>
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
      </div>
      {/* color:color 와 같은 의미 */}
      <h2 style={{ color }}>{message}</h2>
      <button onClick={() => changeColor("red")}>빨강</button>
      <button onClick={() => changeColor("green")}>초록</button>
      <button onClick={() => changeColor("blue")}>파랑</button>
    </div>
  );
};

export default Say;
