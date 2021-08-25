import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import FilterForm from '../containers/FilterForm';
import TestStore from './store';

describe('FoodFilterList', () => {
  test('should match with snapshot', () => {
    const jsx = (
      <Provider store={TestStore}>
        <Router>
          <FilterForm />
        </Router>
      </Provider>
    );
    const tree = (() => renderer.create(jsx).toJSON());
    expect(tree).toMatchSnapshot();
  });
});
