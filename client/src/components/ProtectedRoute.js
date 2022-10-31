import React from "react";
import { Route, Redirect, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import AdminNav from "./Admin/AdminNav";

const ProtectedRoute = ({ isAllowed, redirectPath = "/", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? (
    children
  ) : (
    <>
      <AdminNav />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
