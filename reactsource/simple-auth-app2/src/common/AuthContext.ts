import { createContext, useContext } from "react";

// id,password, 로그인여부(true/false),login(),logout()
type AuthContextType = {
  id: string;
  password?: string;
  isLoggedIn: boolean;
  login: (id: string, password: string) => void;
  logout: () => void;
};

export type LoginFormState = {
  id: string;
  password: string;
};
export type SignupFormState = LoginFormState & {
  nickname: string;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthContext null");
  }
  return context;
}
