import { combineReducers } from 'redux';

import foodsReducer from './FoodsReducer';
import filterReducer from './FilterReducer';

const allReducers = combineReducers({
  foods: foodsReducer,
  filter: filterReducer,
});

export default allReducers;
