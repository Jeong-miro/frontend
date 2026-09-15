import { useState } from "react";
import { initUser, type UserType } from "./user.type";

const UseStateExam = () => {
  //   const [name, setName] = useState("");
  //   const [year, setYear] = useState(0);
  const [user, setUser] = useState<UserType>(initUser);
  const { name, year, warning } = user;

  // name,year 변경 시 공통의 함수 호출
  const handleChange = (e) => {
    // 누구로부터 이벤트가 왔나?
    const { name, value } = e.target;
    if (name === "name") {
      // 기존 내용은 놔두고 name만 변경
      // 바꿔야 할 원본값의 형태 => 객체, 배열 원본복사, 변경값 추가
      setUser((prev) => ({
        ...prev,
        name: value.trim().toLowerCase(),
      }));
    } else {
      // 기존 내용은 놔두고 year만 변경
      // year 기준으로 올해연도에서 뺀 나이가 18세 이상인지 확인
      // 18 미만 : 18세 이상이여야 합니다(warning)
      const inputYear = value === "" ? 0 : parseInt(value);
      // new Date().getFullYear()
      const age = new Date().getFullYear() - inputYear;
      setUser((prev) => ({
        ...prev,
        year: inputYear,
        warning: inputYear != 0 && age < 18 ? "18세 이상이여야 합니다" : "",
      }));
    }
  };

  return (
    <div>
      <div className="m-3">
        <h2 className="text-2xl">useState 확인하기</h2>
        <div>
          <label htmlFor="year">이름</label>
          <input
            type="text"
            className="border border-black"
            placeholder="이름 입력"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="year">년도</label>
          <input
            type="number"
            className="border border-black"
            placeholder="년도 입력"
            name="year"
            value={year}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="rounded bg-orange-500 px-4 py-2">
          Reset
        </button>
      </div>
      <div>
        <ul>
          <li>Name : {name}</li>
          <li>Year: {year} </li>
          <li>Warning: {warning} </li>
        </ul>
      </div>
    </div>
  );
};

export default UseStateExam;
