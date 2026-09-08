import React, { useState } from "react";

const Nickname = () => {
  const [nickname, setNickName] = useState("");
  //const nickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <div>
        <label htmlFor="">닉네임</label>
        <input type="text" onChange={(e) => setNickName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">입력된 닉네임</label>
        <input type="text" value={nickname} />
      </div>
      <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "숨기기" : "보이기"}</button>
      {/* && : 조건부 렌더링 */}
      {/* isVisible 이 TRUE 일때만 p태그 보여주기 */}
      {isVisible && <p>안녕하세요!!</p>}
    </div>
  );
};

export default Nickname;
