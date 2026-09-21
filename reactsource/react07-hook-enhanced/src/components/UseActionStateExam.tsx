import { useActionState } from "react";
async function authLogin(prevState: null | string, formData: FormData) {
  const userid = formData.get("userid");
  const password = formData.get("password");

  // 1초 지연(서버 응답 시간 가정)
  await new Promise((reslove) => setTimeout(reslove, 1000));

  if (userid === "hong" && password === "1234") {
    return "로그인 성공";
  } else {
    return "로그인 실패";
  }
}

const UseActionStateExam = () => {
  // message : 처음에는 initialState, 폼 제출 후에는 authLogin이 반환한 값
  const [message, formAction, isPending] = useActionState(authLogin, null);
  return (
    <div>
      <h2 className="text-3xl">UseActionState 사용하기</h2>
      <form action={formAction}>
        <div>
          <label htmlFor="">아이디</label>
          <input type="text" name="userid" placeholder="아이디" className="border p-2" />
        </div>
        <div>
          <label htmlFor="">비밀번호</label>
          <input type="password" name="password" placeholder="비밀번호" className="border p-2" />
        </div>
        <button type="submit" className="border p-2 bg-amber-300">
          로그인
        </button>
        {isPending ? "전송중..." : message}
      </form>
    </div>
  );
};

export default UseActionStateExam;
