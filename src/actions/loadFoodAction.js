import { LOAD_FOODS, SINGLE_FOOD_DETAILS, FILTERED_FOODS } from '../actionTypes';

export const loadFoods = (foods = []) => ({
  type: LOAD_FOODS,
  foods,
});

export const getFoodDetails = (id = '', update = {}) => ({
  type: SINGLE_FOOD_DETAILS,
  id,
  update,
});

export const setFilter = (title = '') => ({
  type: FILTERED_FOODS,
  title,
});
