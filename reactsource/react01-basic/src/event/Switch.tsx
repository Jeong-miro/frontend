import React from "react";

const Switch = ({}) => {
  // 문서 배경색 변경 black <==> white
  const handleClick = () => {
    const bodyStyle = document.body.style;
    //document.body.style.backgroundColor = "black";
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  };

  return (
    <div>
      <button className="p4 bg-amber-400" onClick={handleClick}>
        Toggle
      </button>
    </div>
  );
};

export default Switch;
