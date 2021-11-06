import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
  <header>
    <div className="header-area ">
      <div id="sticky-header" className="main-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-2">
              <div className="logo">
                <a className="text-white" href="/">
                  Foodistics
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="main-menu white_text  d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li><Link to="/">Food Types and Recipes</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
