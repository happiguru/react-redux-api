const foodReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FOODS':
      return [
        ...action.foods,
      ];
    case 'UPDATE_FOODS':
      return state.map((obj) => (obj.id === action.id ? { ...obj, ...action.update } : obj));
    default:
      return state;
  }
};

export default foodReducer;
