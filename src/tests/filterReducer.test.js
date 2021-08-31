import filterReducer from '../reducers/FilterReducer';

describe('filterReducer', () => {
  test('should set empty to the filter form by default', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({ title: '' });
  });

  test('should set empty array by default', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).not.toEqual({});
  });
});
