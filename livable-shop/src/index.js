import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/css/iconfont.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppRouter />
);
