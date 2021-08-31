import foodsReducer from '../reducers/FoodsReducer';
import foods from './data';

describe('foodsReducer', () => {
  test('should set empty array by default', () => {
    const state = foodsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });

  test('should set empty array by default', () => {
    const state = foodsReducer(undefined, { type: '@@INIT' });
    expect(state).not.toEqual({});
  });

  test('should add foods as a new state', () => {
    const action = {
      type: 'LOAD_FOODS',
      foods,
    };
    const state = foodsReducer(undefined, action);
    expect(state).toEqual([...foods]);
  });

  test('should add foods as a new state', () => {
    const action = {
      type: 'LOAD_FOODS',
      foods,
    };
    const state = foodsReducer(undefined, action);
    expect(state).not.toEqual({});
  });
});
