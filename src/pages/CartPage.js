// src/pages/CartPage.js
import React from 'react';
import { useCart } from '../CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, total, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.idMeal} className="cart-item">
              <img src={item.strMealThumb} alt={item.strMeal} />
              <div className="item-details">
                <h4>{item.strMeal}</h4>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.idMeal)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={() => alert('Proceeding to checkout...')}>Checkout</button>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
