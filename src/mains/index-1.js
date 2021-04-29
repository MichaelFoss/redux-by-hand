/**
 * - Hoist state to App
 * - Modify Wallet / Counter components to use props
 */
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

import App from '../components/App/1-Basic';

const main = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export default main;
