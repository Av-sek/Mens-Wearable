import React, { useEffect, useState } from "react";
import { Route, Redirect, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import AdminNav from "./Admin/AdminNav";

const ProtectedRoute = ({ isAllowed, redirectPath = "/", children }) => {
  const [allow, setAllow] = useState(false);
  const verifyAuth = async () => {
    const res = await fetch("http://127.0.0.1:8000/token/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    const data = await res.json();
    console.log("verify auth");
    if (data) {
      setAllow(true);
    }
    console.log(data);
  };

  useEffect(() => {
    verifyAuth();
  }, []);
  if (!allow) {
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
