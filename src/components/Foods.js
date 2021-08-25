import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Food.css';

const Foods = ({ foods }) => (
  <div className="row">
    {foods && foods.map((food) => (
      <div className="col-xl-4 col-lg-3 col-md-6" key={food.idMeal}>
        <Link to={`/${food.idMeal}`}>
          <div className="single_recepie text-center">
            <div className="recepie_thumb">
              <img src={food.strMealThumb} alt={food.strMeal} />
            </div>
            <h3>{food.strMeal}</h3>
            <span>{food.strArea}</span>
            <p>{food.strCategory}</p>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

Foods.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Foods;
