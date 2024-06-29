// src/pages/CartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './CartPage.css'; // Create CartPage.css for styling

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.idMeal} className="cart-item">
              <img src={item.strMealThumb} alt={item.strMeal} />
              <div>
                <h3>{item.strMeal}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.idMeal)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
