import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store';
import { Provider } from 'react-redux';
import { Counter } from './counter/Counter';


ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
