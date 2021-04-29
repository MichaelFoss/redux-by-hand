/**
 * - Create actions, reducers
 * - Create dispatcher
 */
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

import App from '../components/App/2-With-Actions-And-Reducers';

const main = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export default main;
