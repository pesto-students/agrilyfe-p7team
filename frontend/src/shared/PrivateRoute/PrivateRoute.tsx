import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const token = localStorage.getItem("user") || sessionStorage.getItem("user");
  if (token) {
    return children;
  }
  return <Navigate to="/sign-in" replace />;
}

export default PrivateRoute;
