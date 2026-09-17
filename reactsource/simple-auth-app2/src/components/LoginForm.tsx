import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, type LoginFormState } from "../common/AuthContext";

const LoginForm = () => {
  const [form, setForm] = useState<LoginFormState>({ id: "", password: "" });
  const { id, password } = form;

  // 로그인 함수 가져오기(useContext)
  const { login, isLoggedIn } = useAuth();
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

  const handleLogin = (e: React.SubmitEvent) => {
    e.preventDefault();
    //id,password 값이 없다면 alert('아이디나 비밀번호를 확인해주세요')
    if (!id.trim() || !password.trim()) {
      alert("아이디나 비밀번호를 확인해주세요");
      return;
    }

    //login() 함수 사용
    login(id, password);
    //mypage 로 이동하기
    navigate("/mypage");
  };

  if (isLoggedIn) {
    return <p>이미 로그인 된 상태입니다.</p>;
  }

  return (
    <main className="flex min-h-[calc(100vh-65px)] items-center justify-center bg-gray-50 px-4">
      <section className="w-full max-w-md">
        {/* Login Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
              M
            </div>

            <h2 className="text-2xl font-bold text-gray-900">로그인</h2>

            <p className="mt-2 text-sm text-gray-500">My Page에 로그인해보세요.</p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleLogin}>
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
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 active:bg-blue-800"
            >
              로그인
            </button>
          </form>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-gray-500 transition hover:text-blue-600">
              ← 홈으로 돌아가기
            </Link>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 text-center text-xs leading-5 text-gray-400">
          이 페이지는 서버 없이 React 상태 관리 기능을 학습하기 위한
          <br />
          로그인 예제입니다.
        </p>
      </section>
    </main>
  );
};

export default LoginForm;
