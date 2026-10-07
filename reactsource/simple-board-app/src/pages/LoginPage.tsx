import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { UserLogin } from "../Types/user";
import { getCurrentUser, signin } from "../apis/userApi";
import { AuthContext, useAuth } from "../common/AuthContext";
const LoginPage = () => {
  const navigate = useNavigate();
  // login 가져오기

  const { login } = useAuth();

  const [loginForm, setLoginForm] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const { email, password } = loginForm;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    try {
      const result = await signin(loginForm);
      console.log(result);
      // 브라우저 세션 저장소에 저장
      sessionStorage.setItem("access_token", result.access_token);
      // 사용자 정보 가져오기
      const currentUser = await getCurrentUser();
      console.log(currentUser);

      // currentUser 값을 login() 에 저장
      login(currentUser);
      // 첫 페이지로 이동
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold">로그인</h1>

        <p className="mb-8 text-sm text-gray-500">Dev Board에 로그인하세요.</p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-sm font-medium">이메일</label>

            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">비밀번호</label>

            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              placeholder="비밀번호"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            로그인
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          계정이 없으신가요?
          <Link to="/users/signup" className="font-medium text-indigo-600 hover:underline">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
