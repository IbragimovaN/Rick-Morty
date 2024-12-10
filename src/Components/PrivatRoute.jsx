import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvader";

export const PrivatRoute = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();

  if (auth.user === null) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
};
