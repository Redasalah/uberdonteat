import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-button">☰</button>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="login-button">Log in</Link>
        <Link to="/signup" className="signup-button">Sign up</Link>
      </div>
    </nav>
  );
};

export default Navbar;