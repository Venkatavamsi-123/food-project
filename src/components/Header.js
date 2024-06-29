// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://t4.ftcdn.net/jpg/01/99/85/83/240_F_199858387_FymKsmjdD0Ss2el9eIstS7Y4UaBg5F6B.jpg" alt="WebChef Logo" />
        <span>WebChef</span>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
