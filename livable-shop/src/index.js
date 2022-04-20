import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from './router';
import store from './redux/store'
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/css/iconfont.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <AppRouter />
  </Provider>
);
