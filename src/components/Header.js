import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header-container">
    <Link className="header-link" to="/">Food Types and Recipes</Link>
  </header>
);

export default Header;
