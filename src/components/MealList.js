// src/components/MealList.js
import React from 'react';
import { Link } from 'react-router-dom';

const MealList = ({ meals }) => {
  return (
    <div className="meal-list">
      {meals.map(meal => (
        <div key={meal.idMeal} className="meal-item">
          <Link to={`/meal/${meal.idMeal}`}>
            <img src={`${meal.strMealThumb}/preview`} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MealList;
