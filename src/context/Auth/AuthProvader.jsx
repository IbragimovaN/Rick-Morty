import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvader = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  const signin = (newUser, collback) => {
    setUser(newUser);
    localStorage.setItem("user", newUser);
    collback();
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  const value = {
    user,
    signin,
    signout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
