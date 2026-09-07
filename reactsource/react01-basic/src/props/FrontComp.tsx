// props 라는 변수로 한꺼번에 받기
// const FrontComp = (props: { propData1: string[]; frTitle: string }) => {
//   const liRows = [];
//   for (let i = 0; i < props.propData1.length; i++) {
//     // 리액트가 리스트를 렌더링 할 때 각 항목을 고유하게 식별할 수 있도록
//     // key 속성 지정
//     liRows.push(<li key={i}>{props.propData1[i]}</li>);
//   }
//   return (
//     <div>
//       <li>{props.frTitle}</li>
//       <ul>{liRows}</ul>
//     </div>
//   );
// };

const FrontComp = ({
  frontData,
  frTitle,
  onClick,
}: {
  frontData: string[];
  frTitle: string;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}) => {
  // const {frontData, frTitle} = props

  const liRows = [];
  for (let i = 0; i < frontData.length; i++) {
    // 리액트가 리스트를 렌더링 할 때 각 항목을 고유하게 식별할 수 있도록
    // key 속성 지정
    liRows.push(
      <li key={i} onClick={onClick}>
        {frontData[i]}
      </li>,
    );
  }
  return (
    <div>
      <li>{frTitle}</li>
      <ul>{liRows}</ul>
    </div>
  );
};
export default FrontComp;
