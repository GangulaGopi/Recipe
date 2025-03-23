import React from "react";
import { Link } from "react-router-dom";
import "./Register.css"; // ✅ Ensure this file exists in the same folder

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Create a password" required />
          <input type="password" placeholder="Confirm password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
