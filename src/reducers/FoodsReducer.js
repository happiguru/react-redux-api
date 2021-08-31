import { LOAD_FOODS, SINGLE_FOOD_DETAILS } from '../actionTypes/index';

const foodsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_FOODS:
      return [
        ...action.foods,
      ];
    case SINGLE_FOOD_DETAILS:
      return state.map((obj) => (obj.id === action.id ? { ...obj, ...action.update } : obj));
    default:
      return state;
  }
};

export default foodsReducer;
