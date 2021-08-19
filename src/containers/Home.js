import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import FilterForm from './FilterForm';
import FoodList from './FoodList';
import { addFoods } from '../actions/Foods';

const FoodItems = ({ addFoods }) => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
      addFoods(data.meals);
      const el = document.querySelector('.error');
      el.innerHTML = '';
    } catch {
      const el = document.querySelector('.error');
      el.innerHTML = 'Sorry, please try again!';
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <FilterForm />
      <FoodList />
    </div>
  );
};

FoodItems.propTypes = {
  addFoods: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addFoods: (data) => dispatch(addFoods(data)),
});

export default connect(null, mapDispatchToProps)(FoodItems);
