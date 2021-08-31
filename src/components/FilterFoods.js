import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/filterform.css';

const FilterFoods = ({ changeFilter }) => {
  const [input, setInput] = useState('');
  const handler = (e) => {
    e.preventDefault();
    changeFilter(input);
    setInput('');
    if (input.length === 0) {
      const el = document.querySelector('.error');
      el.innerHTML = 'Sorry! No records found!!';
    }
  };

  return (
    <div className="filter-form">
      <form onSubmit={handler} className="form-inline search-form">
        <input
          className="form-control mb-2 mr-sm-2 form-input"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Filter food by country, category or by name"
          value={input}
        />
        <button className="btn btn-md btn-primary" type="submit">
          Filter
        </button>
      </form>
    </div>
  );
};

FilterFoods.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default FilterFoods;
