import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import setTitleFilter from '../actions/Filter';
import { addFoods } from '../actions/Foods';
import '../styles/filterform.css';

const FilterForm = ({ addFoods }) => {
  const [input, setInput] = useState('');
  const fetchData = async () => {
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`);
      addFoods(data.meals);
      const el = document.querySelector('.error');
      el.innerHTML = '';
    } catch (err) {
      const el = document.querySelector('.error');
      el.innerHTML = 'Sorry, please try again!';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === '') return;
    fetchData();
    setInput('');
    e.target.firstChild.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-inline filter-form">
        <input className="form-control mb-2 mr-sm-2 form-input" placeholder="Search by first letter" onChange={(e) => setInput(e.target.value)} />
        <button className="btn btn-md btn-secondary" type="submit">Search</button>
      </form>
    </div>
  );
};

FilterForm.propTypes = {
  addFoods: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTitleFilter: (title) => dispatch(setTitleFilter(title)),
  addFoods: (data) => dispatch(addFoods(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
