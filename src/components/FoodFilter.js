import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/filterform.css';

const FoodFilter = () => {
  const foods = useSelector((state) => state.foods);
  const [input, setInput] = useState('');
  const handler = (e) => {
    e.preventDefault();
    const f = foods.filter((f) => f.strMeal.toUpperCase().includes(input.toUpperCase())
    || f.strCategory.toUpperCase().includes(input.toUpperCase())
    || f.strArea.toUpperCase().includes(input.toUpperCase()));
    setInput('');
    e.target.firstChild.value = '';
    if (f.length === 0) {
      const el = document.querySelector('.error');
      el.innerHTML = 'Sorry! No records found!!';
    }
  };
  return (
    <>
      <div className="filter-form">
        <form onSubmit={handler} className="form-inline search-form">
          <input className="form-control mb-2 mr-sm-2 form-input" onChange={(e) => setInput(e.target.value)} placeholder="Filter food by country, category or by name" />
          <button className="btn btn-md btn-primary" type="submit">Filter</button>
        </form>
      </div>
    </>
  );
};

export default FoodFilter;
