import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import App from './components/App';
import reducers from './reducers';

// TEMP CODE TO TEST BACKEND MAILER SETUP
import axios from 'axios';
window.axios = axios;

// createStore() arguments:
// Arg 1 - reducer
// Arg 2 - initial state
// Arg 3 - middleware to apply to actions passed through reducers

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
