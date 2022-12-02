import React, { useEffect, useState } from "react";
import { Route, Redirect, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AdminNav from "./Admin/AdminNav";
import { verify } from "../features/user/userActions";

const ProtectedRoute = ({ isAllowed, redirectPath = "/", children }) => {
  console.log("isAllowed ", isAllowed);
  const { userInfo, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verify());
  }, [dispatch]);

  if (error) {
    console.log("user not here");
    return <Navigate to={redirectPath} replace />;
  }
  if (loading === true) {
    return <h1 style={{ fontSize: "1000px" }}>Loading...</h1>;
  }
  if (loading === false && userInfo) {
    console.log("user here with loading false");
    console.log(userInfo, loading, error);
    return children ? (
      children
    ) : (
      <>
        <AdminNav />
        <Outlet />
      </>
    );
  }
};

export default ProtectedRoute;
