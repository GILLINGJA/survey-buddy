import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import 'materialize-css/dist/css/materialize.min.css';

import App from './components/App';
import reducers from './reducers';

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
