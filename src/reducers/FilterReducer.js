import { FILTERED_FOODS } from '../actionTypes/index';

const defaultFilterState = {
  title: '',
};

const filterReducer = (state = defaultFilterState, action) => {
  switch (action.type) {
    case FILTERED_FOODS:
      return {
        ...state,
        title: action.title,
      };
    default:
      return state;
  }
};

export default filterReducer;
