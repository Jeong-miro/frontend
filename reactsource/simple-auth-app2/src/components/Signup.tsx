import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import type { SignupFormState } from "../authSlice";

const Signup = () => {
  const [form, setForm] = useState<SignupFormState>({ id: "", password: "", nickname: "" });
  const { id, password, nickname } = form;

  // 로그인 함수 가져오기(useContext)
  const auth = useAppSelector((state) => state.auth);

  //react-router-dom 에서 제공
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // id, password 둘 다 적용
    // 어디서 발생한 이벤트인지
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSignup = (e: React.SubmitEvent) => {
    e.preventDefault();
    //id,password 값이 없다면 alert('아이디나 비밀번호를 확인해주세요')
    if (!id.trim() || !password.trim() || !nickname?.trim()) {
      alert("아이디나 비밀번호 혹은 이름을 확인해주세요");
      return;
    }

    // 서버 전송

    //login 로 이동하기
    navigate("/login");
  };

  if (auth.id) {
    return <Navigate to={"/mypage"} replace />;
  }

  return (
    <main className="flex min-h-[calc(100vh-65px)] items-center justify-center bg-gray-50 px-4">
      <section className="w-full max-w-md">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">회원가입</h2>

            <p className="mt-2 text-sm text-gray-500">My Page에 회원가입해보세요.</p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSignup}>
            <div>
              <label htmlFor="id" className="mb-2 block text-sm font-medium text-gray-700">
                아이디
              </label>

              <input
                name="id"
                value={id}
                onChange={handleChange}
                id="id"
                type="text"
                placeholder="아이디를 입력해주세요"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                비밀번호
              </label>

              <input
                name="password"
                value={password}
                onChange={handleChange}
                id="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label htmlFor="nickname" className="mb-2 block text-sm font-medium text-gray-700">
                이름
              </label>
              <input
                name="nickname"
                value={nickname}
                onChange={handleChange}
                id="nickname"
                type="nickname"
                placeholder="이름을 입력해주세요"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 active:bg-blue-800"
            >
              회원가입
            </button>
          </form>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link to="/login" className="text-sm text-gray-500 transition hover:text-blue-600">
              ← 로그인 페이지로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
