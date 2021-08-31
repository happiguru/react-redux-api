import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Food.css';

const Food = ({
  idMeal, strMealThumb, strMeal, strArea, strCategory,
}) => (
  <div className="col-xl-4 col-lg-3 col-md-6" key={idMeal}>
    <Link to={`/${idMeal}`}>
      <div className="single_recepie text-center">
        <div className="recepie_thumb">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <h3>{strMeal}</h3>
        <span>{strArea}</span>
        <p>{strCategory}</p>
      </div>
    </Link>
  </div>
);

Food.propTypes = {
  idMeal: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
  strMeal: PropTypes.string.isRequired,
  strArea: PropTypes.string.isRequired,
  strCategory: PropTypes.string.isRequired,
};

export default Food;
