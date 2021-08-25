import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateFoods } from '../actions/Foods';
import '../styles/FoodDetail.css';

const FoodsDetail = ({ food }) => (
  <div className="container mx-auto">
    <div className="row my-2">
      <div className="col-12 col-md-6">
        <img className="img-responsive mx-auto single-image" src={food?.strMealThumb} alt={food?.strMeal} />
      </div>
      <div className="col-12 col-md-6">
        <div className="recepies_info">
          <h3>{food?.strMeal}</h3>
          <p>{food?.strArea}</p>
          <p>{food?.strCategory}</p>
          <div className="resepies_details">
            <h4>Ingredients:</h4>
            <ul>
              <li>
                <p>
                  <strong>Ingredient 1 : </strong>
                  {food?.strIngredient1}
                </p>
              </li>
              <li>
                <p>
                  <strong>Ingredient 2 : </strong>
                  {food?.strIngredient2}
                </p>
              </li>
              <li>
                <p>
                  <strong>Ingredient 3 : </strong>
                  {food?.strIngredient3}
                </p>
              </li>
              <li>
                <p>
                  <strong>Ingredient 4 : </strong>
                  {food?.strIngredient4}
                </p>
              </li>
            </ul>
          </div>
          <a className="btn btn-info" href={food?.strYoutube} target="_blank" rel="noreferrer">Watch a video</a>
        </div>
      </div>
      <div className="card-body">
        <h4>Instructions: </h4>
        <p className="card-text">{food && food.strInstructions}</p>
      </div>
    </div>
  </div>
);

FoodsDetail.propTypes = {
  food: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strArea: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strYoutube: PropTypes.string.isRequired,
    title: PropTypes.string,
    strIngredient1: PropTypes.string.isRequired,
    strIngredient2: PropTypes.string.isRequired,
    strIngredient3: PropTypes.string.isRequired,
    strIngredient4: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  food: state.foods.find((ff) => ff.idMeal === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  updateFoods: (id, update) => dispatch(updateFoods(id, update)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodsDetail);
