import React from "react";
import type { Usertype } from "./LocalJsonFetcher";

const ContentBody = ({ myResult }: { myResult: Usertype }) => {
  return (
    <div>
      <h2>{myResult.name}</h2>
      <ul>
        <li>num : {myResult.num}</li>
        <li>id : {myResult.id}</li>
        <li>cell : {myResult.cell}</li>
        <li>description : {myResult.description}</li>
      </ul>
    </div>
  );
};

export default ContentBody;
