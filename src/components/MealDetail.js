// src/components/MealDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MealDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => {
        setMeal(response.data.meals[0]);
      })
      .catch(error => {
        console.error('Error fetching meal:', error);
      });
  }, [id]);

  return (
    <div className="meal-detail">
      {meal ? (
        <>
          <h1>{meal.strMeal}</h1>
          <img src={`${meal.strMealThumb}/preview`} alt={meal.strMeal} />
          <p>{meal.strInstructions}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MealDetail;
