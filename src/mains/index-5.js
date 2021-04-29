/**
 * - Created action creators
 */
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../components/App/5-Refactored-to-Action-Creators/reducers';

import App from '../components/App/5-Refactored-to-Action-Creators';

const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, reduxDevToolsExtension);

const main = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export default main;
