import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicOnlyRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuth);

  if (isAuthenticated) {
    return <Navigate to={"/posts"} replace />;
  }

  return children;
};

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuth);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};
