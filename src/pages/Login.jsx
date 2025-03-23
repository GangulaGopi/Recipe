import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // ✅ Import the CSS file

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Login</button>
        </form>
        <p>
          New User? <Link to="/register">Create an Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
