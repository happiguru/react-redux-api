import React from 'react';
import PropTypes from 'prop-types';
import Food from './Food';

const FoodsList = ({ foodData, filterData }) => {
  const renderFoods = (foods) => {
    const f = foods.map((food) => (
      <Food
        key={food.idMeal}
        idMeal={food.idMeal}
        strMealThumb={food.strMealThumb}
        strMeal={food.strMeal}
        strArea={food.strArea}
        strCategory={food.strCategory}
      />
    ));
    return f;
  };

  const filteredFoods = filterData === ''
    ? foodData
    : foodData.filter(
      (f) => f.strMeal.toUpperCase().includes(filterData.toUpperCase())
            || f.strCategory.toUpperCase().includes(filterData.toUpperCase())
            || f.strArea.toUpperCase().includes(filterData.toUpperCase()),
    );
  return (
    <>
      <div className="col-xl-12">
        <div className="bradcam_text text-center">
          <h3 className="py-4">Food Recipes</h3>
        </div>
      </div>
      <div className="row">{renderFoods(filteredFoods)}</div>
    </>
  );
};

FoodsList.propTypes = {
  foodData: PropTypes.arrayOf(PropTypes.object),
  filterData: PropTypes.string.isRequired,
};

FoodsList.defaultProps = {
  foodData: [],
};

export default FoodsList;
