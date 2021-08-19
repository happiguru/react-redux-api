import { combineReducers } from 'redux';

import foodReducer from './FoodReducer';
import filterReducer from './FilterReducer';

const allReducers = combineReducers({
  foods: foodReducer,
  filters: filterReducer,
});

export default allReducers;
