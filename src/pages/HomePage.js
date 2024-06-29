// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealList from '../components/MealList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [meals, setMeals] = useState([]);

  const fetchMeals = (query) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(response => {
        setMeals(response.data.meals || []);
      })
      .catch(error => {
        console.error('Error fetching meals:', error);
      });
  };

  useEffect(() => {
    fetchMeals(''); // Fetch initial meals
  }, []);

  return (
    <div>
      <SearchBar onSearch={fetchMeals} />
      <h2>World Famous Dishes</h2>
      <MealList meals={meals} />
    </div>
  );
};

export default HomePage;
