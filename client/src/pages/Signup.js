import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaLock, FaIdCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signUp = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <div className="form-title">
        <p>Sign Up now </p>
        <p className="subtitle">
          Or login <Link to="/login">here</Link>{" "}
        </p>
      </div>
      <form action="#">
        <div className="form-group">
          <label htmlFor="email"> Name </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <FaUserAlt className="form-icon" />
        </div>
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
        <button className="primary-btn" onClick={signUp} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
