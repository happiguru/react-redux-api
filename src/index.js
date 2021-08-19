import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'containers/Home';
import FoodsDetail from 'components/FoodsDetail';
import reportWebVitals from './reportWebVitals';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="main-container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={FoodsDetail} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
