import React from 'react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Header with Link', () => {
  test('full app rendering/navigating', () => {
    render(<Header />, { wrapper: MemoryRouter });
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText('Foodistics')).toBeInTheDocument;
  });
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
