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
  useEffect(() => {
    dispatch(verify());
  }, []);

  if (error !== null) {
    console.log("err check");
    console.log(error);
    return <Navigate to="/" replace />;
  }
  if (loading === true) {
    return <h1 style={{ fontSize: "1000px" }}>Loading...</h1>;
  }
  if (userInfo === true) {
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
