const TopComp = ({ frontData, backData }) => {
  return (
    <div>
      <ol>
        <li>프론트엔드</li>
        {/* frontData 보여주기 */}
        <ul>
          {frontData.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <li>백엔드</li>
        <ul>
          {backData.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
          <li></li>
        </ul>
      </ol>
    </div>
  );
};

export default TopComp;
