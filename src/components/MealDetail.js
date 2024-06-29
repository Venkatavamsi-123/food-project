// src/components/MealDetail.js
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../CartContext';
import './MealDetail.css';

const MealDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => {
        setMeal(response.data.meals[0]);
      })
      .catch(error => {
        console.error('Error fetching meal details:', error);
      });
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  // Assign a random price for demonstration
  const price = (Math.random() * 20 + 5).toFixed(2);

  return (
    <div className="meal-detail">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
      <h3>Price: ${price}</h3>
      <button onClick={() => addToCart({ ...meal, price: parseFloat(price) })}>Add to Cart</button>
      {meal.strYoutube && (
        <div className="meal-video">
          <h3>Preparation Video</h3>
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
        </div>
      )}
    </div>
  );
};

export default MealDetail;
