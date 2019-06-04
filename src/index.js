import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import GlobalState from './context/GlobalState';

ReactDOM.render(
  <GlobalState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalState>,
  document.getElementById('root')
);

serviceWorker.unregister();
