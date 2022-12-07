import React, { useEffect, useState } from "react";
import { Route, Redirect, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

import AdminNav from "./Admin/AdminNav";
import { verify } from "../features/user/userActions";

const ProtectedRoute = ({ children }) => {
  const { userInfo, loading, error } = useSelector((state) => state.user);
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  console.log("check protected route");

  useEffect(() => {
    console.log("check protected route useEffect");
    dispatch(verify());
  }, []);

  if (error !== null) {
    console.log("err check");
    return <Navigate to="/" replace />;
  }
  if (loading === true) {
    console.log("loading check --1");
    console.log("loading check --1 " + userInfo);

    return <h1 style={{ fontSize: "1000px" }}>Loading...</h1>;
  }
  if (userInfo === true) {
    console.log("userInfo check --1 " + userInfo);
    console.log("children render check --2");
    return children ? (
      children
    ) : (
      <>
        <Outlet />
      </>
    );
  }
};

export default ProtectedRoute;
