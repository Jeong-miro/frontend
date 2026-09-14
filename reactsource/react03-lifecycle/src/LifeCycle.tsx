import { useEffect, useState } from "react";

const MoveBox = ({ initPosition }: { initPosition: number }) => {
  console.log("LifeCycle ==> 1. 컴포넌트 실행(함수호출)");

  const [position, setPosition] = useState(initPosition);
  const [leftCount, setLeftCount] = useState(1);
  const boxStyle: React.CSSProperties = {
    backgroundColor: "red",
    position: "relative",
    textAlign: "center",
    width: "100px",
    height: "100px",
    margin: "10px",
    lineHeight: "100px",
    left: `${position}px`,
  };
  const moveLeft = () => {
    setPosition(() => position - 20);
    setLeftCount(() => leftCount + 1);
  };
  const moveRight = () => {
    setPosition(() => position + 20);
  };

  // 의존성 배열 부분을 아예 제외(미작성) : 컴포넌트가 업데이트될 때마다 실행
  // [] : 최초 한 번만 실행되고 더이상 실행되지 않음
  // [배열,변수,....] : [] 안에 선언된 변수 값들이 바뀔때만 실행
  //   useEffect(() => {
  //    A. 컴포넌트가 마운트 된 후 실행할 코드");
  //  return () => {
  //       B. 컴포넌트가 언마운트 되기 직전에 실행할 코드"');
  //     };
  //   },[의존성배열]);

  useEffect(() => {
    console.log("useEffect 실행 ==> 3. 컴포넌트 마운트");
    return () => {
      console.log('"useEffect 실행 ==> 4. 컴포넌트 언마운트"');
    };
  }, [leftCount]);

  console.log("return 실행 ==> 2. 렌더링(return 문)");
  return (
    <div>
      <h4>함수형 컴포넌트 생명주기</h4>
      <div style={boxStyle}>{leftCount}</div>
      <button onClick={moveLeft} className="border bg-gray-100 p-2">
        좌측이동
      </button>
      <button onClick={moveRight} className="border bg-gray-100 p-2">
        우측이동
      </button>
    </div>
  );
};

const LifeCycle = () => {
  return (
    <div>
      <h2>React Hook - useEffect</h2>
      <MoveBox initPosition={50} />
    </div>
  );
};

export default LifeCycle;
