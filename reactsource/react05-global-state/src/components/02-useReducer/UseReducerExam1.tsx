import { useReducer, useState } from "react";
import { initUser, type UserType } from "../01-useState/user.type";
import { userReduer } from "./user.reducer";

const UseReducerExam1 = () => {
  //const [state, dispatch] = useReducer(reducer, state초기값);
  // state : 상태 저장을 위한 변수
  // dispatch : 상태 변경할 때 사용되는 함수 호출(action 보내기)
  // reducer : 상태를 변경하기 위해 정의한 함수
  const [user, userDispatch] = useReducer(userReduer, initUser);
  const { name, year, warning } = user;
  // name,year 변경 시 공통의 함수 호출
  const handleChange = (e) => {
    // 누구로부터 이벤트가 왔나?
    const { name, value } = e.target;

    if (name === "name") {
      // 소문자변경
      userDispatch({
        type: "SET_NAME",
        name: value,
      });
    } else {
      userDispatch({
        type: "SET_YEAR",
        year: value,
      });
    }
  };

  return (
    <div>
      <div className="m-3">
        <h2 className="text-2xl">useReducer 확인하기</h2>
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
        <button
          type="button"
          onClick={() => userDispatch({ type: "RESET" })}
          className="rounded bg-orange-500 px-4 py-2"
        >
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

export default UseReducerExam1;
