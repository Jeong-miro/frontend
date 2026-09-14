import React from "react";
import RandomUser from "./RandomUser";

const ExternalApiFetcher = () => {
  const onProfile = async (user) => {
    // cell, gender, username, password
    // 전화번호 :
    // 성별 :
    let data = `전화번호 : ${user.cell}\n성별 : ${user.gender}\n아이디 : ${user.login.username}\n비밀번호 : ${user.login.password}`;
    alert(data);
    // alert(
    //   `전화번호 : ${user.cell}\n성별 : ${user.gender}\n아이디 : ${user.login.username}\n비밀번호 : ${user.login.password}`,
    // );
  };
  return (
    <div>
      <h2 className="text-2xl">외부 서버 통신</h2>
      <RandomUser onProfile={onProfile} />
    </div>
  );
};

export default ExternalApiFetcher;
