import React, { useState } from "react";

const MyButton = ({ style, onClick, count }) => {
  //const [count, setCount] = useState(0);
  return (
    <div>
      <button style={style} onClick={onClick}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default MyButton;
