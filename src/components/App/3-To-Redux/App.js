import { Component } from 'react';
import '../App.css';
import Wallet from '../../Wallet';
import Counter from '../../Counter';
import { actionTypes } from './actions';
import { createStore } from 'redux';
import reducers from './reducers';

const TITLE = 'To Redux';

const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, reduxDevToolsExtension);

class App extends Component {
  onCounterChange = (changeValue) => {
    store.dispatch({
      type: actionTypes.counter.UPDATE,
      payload: {
        value: changeValue,
      },
    });
  };

  onDeposit = () => {
    const {
      count: value,
    } = store.getState();
    store.dispatch({
      type: actionTypes.total.DEPOSIT,
      payload: {
        value,
      },
    });
  };

  onWithdraw = () => {
    const {
      count: value,
    } = store.getState();
    store.dispatch({
      type: actionTypes.total.WITHDRAW,
      payload: {
        value,
      },
    });
  };

  render() {
    const {
      count,
      total,
    } = store.getState();

    return (
      <div className="App">
        <h1>{TITLE}</h1>
        <Counter
          onChange={this.onCounterChange}
          count={count}
        />
        <Wallet
          onDeposit={this.onDeposit}
          onWithdraw={this.onWithdraw}
          total={total}
          count={count}
        />
      </div>
    );
  }
}

export default App;

// TODO I want my component to re-render on changes to the store
