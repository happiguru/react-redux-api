import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Foods from '../components/Foods';

const FoodList = ({ foods }) => {
  const [input, setInput] = useState('');
  const [foodsFilter, setFoodsFilter] = useState(foods);

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = foods.filter((f) => f.strMeal.toUpperCase().includes(input.toUpperCase())
    || f.strCategory.toUpperCase().includes(input.toUpperCase())
    || f.strAea.toUpperCase().includes(input.toUpperCase()));
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
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <input className="search-input" onChange={(event) => setInput(event.target.value)} placeholder="Filter food by country, category or by name" />
        <button className="btn" type="submit">Filter</button>
      </form>
      <div>
        <Foods foods={foodsFilter || foods} />
      </div>
    </div>
  );
};

FoodList.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.foods,
});

export default connect(mapStateToProps)(FoodList);
