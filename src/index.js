import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import style from './index.css'

ReactDOM.render(
  <BrowserRouter>
    <App className={style} />
  </BrowserRouter>,
  document.getElementById('root')
);

