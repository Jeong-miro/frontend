import { createContext, useContext } from "react";
import type { User } from "../Types/user";

type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

// 다른 컴포넌트에서 매번 null 체크 필요 => use 훅으로 만들어서 제공
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Error 확인");
  }
  return context;
}
