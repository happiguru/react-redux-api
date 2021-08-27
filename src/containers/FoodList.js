import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Foods from '../components/Foods';
import '../styles/filterform.css';

const FoodList = () => {
  const foods = useSelector((state) => state.foods);
  const [input, setInput] = useState('');
  const [foodsFilter, setFoodsFilter] = useState(foods);
  const handler = (e) => {
    e.preventDefault();
    const f = foods.filter((f) => f.strMeal.toUpperCase().includes(input.toUpperCase())
    || f.strCategory.toUpperCase().includes(input.toUpperCase())
    || f.strArea.toUpperCase().includes(input.toUpperCase()));
    setFoodsFilter(f);
    setInput('');
    e.target.firstChild.value = '';
    if (f.length === 0) {
      const el = document.querySelector('.error');
      el.innerHTML = 'Sorry! No records found!!';
    }
  };

  useEffect(() => {
    setFoodsFilter(foods);
  }, [foods]);

  return (
    <>
      <div className="filter-form">
        <form onSubmit={handler} className="form-inline search-form">
          <input className="form-control mb-2 mr-sm-2 form-input" onChange={(e) => setInput(e.target.value)} placeholder="Filter food by country, category or by name" />
          <button className="btn btn-md btn-primary" type="submit">Filter</button>
        </form>
        <div className="my-3 text-center error" />
      </div>
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
