import BackComp from "./BackComp";
import FromComp from "./FormComp";
import FrontComp from "./FrontComp";

const MyComp = () => {
  return (
    <div>
      {/* 개별 컴포넌트 삽입 */}
      <h2>React -Component</h2>
      <ol>
        <FrontComp />
        <BackComp />
      </ol>
      <FromComp />
      {/* 컴포넌트 재활용 */}
      <FrontComp />
      <BackComp />
    </div>
  );
};

export default MyComp;
