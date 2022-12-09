import React, { useEffect, useState } from "react";
import { Route, Redirect, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

import AdminNav from "./Admin/AdminNav";
import { verify } from "../features/user/userActions";

const ProtectedRouteAdmin = ({ children }) => {
  const dispatch = useDispatch();

  const { userInfo, loading, error, role } = useSelector((state) => state.user);
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(verify());
  }, []);

  console.log("isAdmin " + role);
  console.log("userInfo " + userInfo);
  console.log("loading " + loading);
  console.log("error " + error);

  if (error !== null) {
    return <Navigate to="/" replace />;
  }
  if (userInfo === true && role === "user") {
    return <Navigate to="/" replace />;
  }
  if (loading === true) {
    return <h1 style={{ fontSize: "1000px" }}>Loading...</h1>;
  }
  if (userInfo === true && role === "admin") {
    return children ? (
      children
    ) : (
      <>
        <Outlet />
      </>
    );
  }
};

export default ProtectedRouteAdmin;
