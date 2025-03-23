import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">THE COOKING CLUB</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarText" 
          aria-controls="navbarText" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link> {/* ✅ Use 'to' instead of 'href' */}
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">Login</Link> {/* ✅ Use 'to' */}
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/register">Register</Link> {/* ✅ Use 'to' */}
            </li>
          </ul>
          <span className="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
