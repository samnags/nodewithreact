import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

// Webpack assumes you mean an NPM module if you don't provide a path
import 'materialize-css/dist/css/materialize.min.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
console.log('ENVIRONMENT IS', process.env.NODE_ENV);
