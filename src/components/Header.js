// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './Header.css';

const Header = () => {
  const { cartItems } = useCart();

  return (
    <header className="header">
      <Link to="/" className="logo">
        WebChef
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
        <Link to="/cart" className="cart-link">
          🛒 <span className="cart-count">{cartItems.length}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
