import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../containers/Home';
import TestStore from './store';

describe('Home', () => {
  test('should match with snapshot', () => {
    const jsx = (
      <Provider store={TestStore}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    const tree = (() => renderer.create(jsx).toJSON());
    expect(tree).toMatchSnapshot();
  });
});
