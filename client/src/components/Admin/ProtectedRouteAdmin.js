import React, { useEffect, useState } from "react";
import { Route, Redirect, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

import AdminNav from "./AdminNav";
import { verify } from "../../features/user/userActions";

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

  if (userInfo === false && role === "user") {
    return <Navigate to="/" replace />;
  }
  if (error !== null) {
    return <Navigate to="/" replace />;
  }
  if (userInfo === true && role === "user") {
    return <Navigate to="/" replace />;
  }
  if (loading === true) {
    return (
      <div class="wrap">
        <div class="loading">
          <div class="bounceball"></div>
          <div class="text">NOW LOADING</div>
        </div>
      </div>
    );
  }
  if (userInfo === true && role === "admin") {
    return (
      <>
        <AdminNav />
        <Outlet />
      </>
    );
  }
};

export default ProtectedRouteAdmin;
