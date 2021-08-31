import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import FoodDetail from './components/FoodDetail';
import Footer from './components/Footer';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={FoodDetail} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
