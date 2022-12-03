import React, { useEffect, useState } from "react";
import { Route, Redirect, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

import AdminNav from "./Admin/AdminNav";
import { verify } from "../features/user/userActions";

const ProtectedRoute = ({ redirectPath = "/", children }) => {
  const { userInfo, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log("check protected route");

  useEffect(() => {
    console.log("check protected route useEffect");
    dispatch(verify());
  }, [dispatch]);

  if (error) {
    return <Navigate to={redirectPath} replace />;
  }
  if (loading === true) {
    return <h1 style={{ fontSize: "1000px" }}>Loading...</h1>;
  }
  if (loading === false && userInfo) {
    return children ? (
      children
    ) : (
      <>
        {/* <AdminNav /> */}
        <Outlet />
      </>
    );
  }
};

export default ProtectedRoute;
