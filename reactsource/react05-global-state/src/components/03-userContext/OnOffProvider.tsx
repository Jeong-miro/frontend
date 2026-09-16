import { useState, type ReactNode } from "react";
import { OnoffContext } from "./CommonContext";

const OnOffProvider = ({ children }: { children: ReactNode }) => {
  const [isOn, setIsOn] = useState(false);
  const toggleOnof = () => setIsOn((prev) => !prev);

  return <OnoffContext.Provider value={{ isOn, toggleOnof }}>{children}</OnoffContext.Provider>;
};

export default OnOffProvider;
