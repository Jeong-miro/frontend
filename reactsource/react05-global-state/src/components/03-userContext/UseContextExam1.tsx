import { useContext } from "react";
import ThemeBox from "./ThemeBox";
import ThemeProvider from "./ThemeProvider";
import { ThemeContext } from "./CommonContext";

const ThemeToggleButton = () => {
  // 4. 자식 컴포넌트에서 공유된 값 사용
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeContext null");
  }

  const { toggleTheme } = context;
  return (
    <div>
      <button className="border px-4" onClick={toggleTheme}>
        테마전환
      </button>
    </div>
  );
};

const UseContextExam1 = () => {
  return (
    <div>
      <h2 className="text-3xl">useContext 예제1</h2>
      {/* 3.상태를 공유할 자식 컴포넌트를 Provider 로 감싸기 */}
      <ThemeProvider>
        <ThemeToggleButton />
        <ThemeBox />
      </ThemeProvider>
    </div>
  );
};

export default UseContextExam1;
