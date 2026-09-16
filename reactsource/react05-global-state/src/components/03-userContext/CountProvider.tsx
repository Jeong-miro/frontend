import React, { useState, type ReactNode } from "react";
import { CountContext } from "./CommonContext";

const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount((prev) => prev + 1);

  return <CountContext.Provider value={{ count, increaseCount }}>{children}</CountContext.Provider>;
};

export default CountProvider;
