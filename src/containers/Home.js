import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import FoodsList from '../components/FoodsList';
import FilterFoods from '../components/FilterFoods';
import { loadFoods, setFilter } from '../actions/loadFoodAction';

const FoodItems = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleFilterChange = (filterData) => {
    dispatch(setFilter(filterData));
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/search.php?f=c',
      );
      setFoods(data.meals);
      dispatch(loadFoods(data.meals));
      setLoading(false);
    } catch (error) {
      const el = document.querySelector('.error');
      el.innerHTML = 'Sorry, please try again!';
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <div className="loader">loading</div>;
  }
  return (
    <div className="container home">
      <FilterFoods changeFilter={handleFilterChange} />
      <div className="my-3 text-center error" />
      <FoodsList foodData={foods} filterData={filter.title} />
    </div>
  );
};

export default FoodItems;
