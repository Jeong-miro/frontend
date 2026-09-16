// 1. Context 로 사용할 객체 생성

import { createContext, useContext } from "react";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

// 실습 2
// 1. Context 로 사용할 객체 생성

type CountContextType = {
  count: number;
  increaseCount: () => void;
};
export const CountContext = createContext<CountContextType | null>(null);

// Context 널 체크를 커스텀 hook 으로 생성
export function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("CountContext nulll");
  }
  return context;
}

type OnoffContextType = {
  isOn: boolean;
  toggleOnof: () => void;
};
export const OnoffContext = createContext<OnoffContextType | null>(null);
