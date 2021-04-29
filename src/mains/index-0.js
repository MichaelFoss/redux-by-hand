/**
 * - Set up broken application
 */
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

import App from '../components/App/0-Broken';

const main = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export default main;
