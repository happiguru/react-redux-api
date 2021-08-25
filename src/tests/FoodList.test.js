import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import FoodList from '../containers/FoodList';
import TestStore from './store';

describe('Foods list', () => {
  test('should match with snapshot', () => {
    const jsx = (
      <Provider store={TestStore}>
        <Router>
          <FoodList />
        </Router>
      </Provider>
    );
    const tree = (() => renderer.create(jsx).toJSON());
    expect(tree).toMatchSnapshot();
  });
});
