import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Foods = ({ foods }) => (
  <div className="food-card d-flex">
    {foods && foods.map((food) => (
      <Link className="food-item" key={food.idMeal} to={`/${food.idMeal}`}>
        <div className="food-card" style={{ width: '18rem', height: '30rem' }}>
          <img src={food.strMealThumb} alt={food.strMeal} />
          <div className="food-card-body">
            <h3>{food.strMeal}</h3>
            <p className="card-text">{food.strArea}</p>
            <p className="card-text">{food.strCategory}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

Foods.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Foods;
