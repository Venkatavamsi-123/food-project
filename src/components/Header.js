// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://t3.ftcdn.net/jpg/04/52/42/68/240_F_452426895_phyjW0MCIDqDQAErpaTwSVw02y770RRS.jpg" alt="WebChef Logo" />
        <span>WebChef</span>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
