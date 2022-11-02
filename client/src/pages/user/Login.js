import { useState } from "react";
import { FaLock, FaIdCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/user/userActions";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { loading, error, userInfo } = useSelector((state) => state.user);

  const signInHandler = (e) => {
    e.preventDefault();
    let formVal = new FormData();
    formVal.append("email", formData.email);
    formVal.append("password", formData.password);
    dispatch(login(formVal));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <div className="form-title">
        <p>Sign In now </p>
        <p className="subtitle">
          Or signup <Link to="/signup">here</Link>
        </p>
      </div>
      <form action="#">
        <div className="form-group">
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
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
            onChange={handleChange}
            value={formData.password}
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
