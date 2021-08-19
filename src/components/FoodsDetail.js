import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateFoods } from '../actions/Foods';

const FoodDetail = ({ food }) => (
  <div>
    <div>
      <img src={food.strMealThumb} alt={food.strMeal} />
      <div className="food-card-body">
        <h3>{food.strMeal}</h3>
        <p className="card-text">{food.strArea}</p>
        <p className="card-text">{food.strCategory}</p>
        <h4>Instructions: </h4>
        <p>{food.strInstructions}</p>
        <iframe
          title={food.strMeal}
          width="100%"
          height="315"
          src={food.strYoutube}
        />
      </div>
    </div>
  </div>
);

FoodDetail.propTypes = {
  food: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strArea: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strYoutube: PropTypes.string.isRequired,
    title: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  food: state.foods.find((ff) => ff.idMeal === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  updateFoods: (id, update) => dispatch(updateFoods(id, update)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetail);
