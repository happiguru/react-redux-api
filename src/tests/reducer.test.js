import foodReducer from '../reducers/FoodReducer';
import foods from './data';

describe('foodsReducer', () => {
  test('should set empty array by default', () => {
    const state = foodReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });

  test('should set empty array by default', () => {
    const state = foodReducer(undefined, { type: '@@INIT' });
    expect(state).not.toEqual({});
  });

  test('should add foods as a new state', () => {
    const action = {
      type: 'ADD_FOODS',
      foods,
    };
    const state = foodReducer(undefined, action);
    expect(state).toEqual([...foods]);
  });

  test('should add foods as a new state', () => {
    const action = {
      type: 'ADD_FOODS',
      foods,
    };
    const state = foodReducer(undefined, action);
    expect(state).not.toEqual({});
  });
});
