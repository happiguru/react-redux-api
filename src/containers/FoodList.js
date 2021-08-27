import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Foods from '../components/Foods';
import '../styles/filterform.css';

const FoodList = () => {
  const foods = useSelector((state) => state.foods);

  const [foodsFilter, setFoodsFilter] = useState(foods);

  useEffect(() => {
    setFoodsFilter(foods);
  }, [foods]);

  return (
    <>
      <div className="my-3 text-center error" />
      <div className="col-xl-12">
        <div className="bradcam_text text-center">
          <h3>Food Recipes</h3>
        </div>
      </div>
      <div className="my-3">
        <Foods foods={foodsFilter || foods} />
      </div>
    </>
  );
};

export default FoodList;
