import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { User } from "../Types/user";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
  };
  const logout = () => {
    sessionStorage.removeItem("access_token");
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isLoggedIn: user !== null,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
