import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import FoodList from './FoodList';
import { addFoods } from '../actions/Foods';

const FoodItems = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
      dispatch(addFoods(data.meals));
      const el = document.querySelector('.error');
      el.innerHTML = '';
    } catch (error) {
      const el = document.querySelector('.error');
      el.innerHTML = 'Sorry, please try again!';
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container home">
      <FoodList />
    </div>
  );
};

export default FoodItems;
