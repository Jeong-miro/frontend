import React, { useState } from "react";
import GlobalTop from "./GlobalTop";
import ContentBody from "./ContentBody";

export type Usertype = {
  num: number;
  id: string;
  name: string;
  cell: string;
  description?: string;
};

const LocalJsonFetcher = () => {
  const [myResult, setMyResult] = useState<Usertype | null>(null);
  const myLinkClick = async (num: number) => {
    // user1, user2..
    const response = await fetch(`./data/user${num}.json`);
    const data = await response.json();
    setMyResult(data);
  };
  return (
    <div>
      <h2 className="text-2xl">내부 서버 통신</h2>
      <GlobalTop myLinkClick={myLinkClick} />
      {myResult && <ContentBody myResult={myResult} />}
    </div>
  );
};

export default LocalJsonFetcher;
