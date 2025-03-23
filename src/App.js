import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; 
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login"; 

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar stays visible across all pages */}
      
      <main> {/* Ensuring proper page layout */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/register" element={<Register />} /> {/* Register Page */}
          <Route path="/login" element={<Login />} /> {/* Login Page */}

          {/* Catch-all route for unmatched paths (404) */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
