import { useState } from "react";
import { useFormStatus } from "react-dom";
async function submitForm(formData: FormData): Promise<string> {
  return new Promise((reslove) =>
    setTimeout(() => {
      reslove(`${formData.get("name")}님의 요청이 완료되었습니다.`);
    }, 1000),
  );
}

const SubmitButton = () => {
  const { pending, data, method, action } = useFormStatus();
  return (
    <button type="submit" className="border p-2 bg-amber-300" disabled={pending}>
      {pending ? "제출중..." : "로그인"}
    </button>
  );
};
const UseFormStatusExam = () => {
  const [message, setMessage] = useState<string | null>("");
  const handleSubmit = async (formData: FormData) => {
    const result = await submitForm(formData);
    setMessage(result);
  };
  return (
    <div>
      <h2 className="text-3xl">UseFormStatus 사용하기</h2>
      <form action={handleSubmit}>
        <div>
          <label htmlFor="">아이디</label>
          <input type="text" name="userId" placeholder="아이디" className="border p-2" required />
        </div>
        <SubmitButton />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UseFormStatusExam;
