import React from "react";

const Button3 = ({ onClick, children }) => {
  return (
    <div>
      <button className="p-4 bg-amber-300 m-2" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

const PlayButton = ({ movieName }) => {
  return (
    <div>
      <Button3 onClick={() => alert(`Playing ${movieName}`)}>Play</Button3>
    </div>
  );
};
const UploadButton = ({}) => {
  return (
    <div>
      <Button3 onClick={() => alert(`Uploading!`)}>Upload Image</Button3>
    </div>
  );
};
const Toolbar = () => {
  return (
    <div>
      <PlayButton movieName={"스파이더맨"} />
      <UploadButton />
    </div>
  );
};

export default Toolbar;
