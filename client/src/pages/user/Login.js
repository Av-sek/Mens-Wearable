import { useEffect, useState, useRef } from "react";
import { FaLock, FaIdCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/user/userActions";

const Login = () => {
  const { loading, error, userInfo } = useSelector((state) => state.user);

  const username = useRef();
  const password = useRef();

  const dispatch = useDispatch();
  console.log(userInfo);

  const signInHandler = (e) => {
    e.preventDefault();
    dispatch(
      login({
        username: username.current?.value,
        password: password.current?.value,
      })
    );
  };

  return userInfo === true ? (
    <Navigate to="/shop" replace />
  ) : (
    <div className="form-container">
      <div className="form-title">
        <p>Sign In now </p>
        <p className="subtitle">
          Or signup <Link to="/signup">here</Link>
        </p>
      </div>
      <form action="#">
        <div className="form-group">
          <label htmlFor="email"> Username </label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="email"
            required
            ref={username}
            placeholder="Enter your email"
          />
          <MdEmail className="form-icon" />
        </div>
        <div className="form-group">
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            name="password"
            required
            className="form-control"
            id="password"
            ref={password}
            placeholder="Enter your password"
          />
          <FaLock className="form-icon" />
        </div>
        <button className="primary-btn" onClick={signInHandler}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
