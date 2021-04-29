import { Component } from 'react';
import '../App.css';
import Wallet from '../../Wallet';
import Counter from '../../Counter';
import { actionTypes } from './actions';
import reducer from './reducers';

const TITLE = 'With Actions and Reducers';

class App extends Component {
  state = reducer(undefined, {});

  /**
   * Takes an action and updates the state based on the reducer's response.
   */
  dispatch(action) {
    this.setState(prevState => reducer(prevState, action));
  }

  onCounterChange = value => {
    this.dispatch({
      type: actionTypes.counter.UPDATE,
      payload: {
        value,
      },
    });
  };

  onDeposit = () => {
    this.dispatch({ type: actionTypes.total.DEPOSIT });
  };

  onWithdraw = () => {
    this.dispatch({ type: actionTypes.total.WITHDRAW });
  };

  render() {
    return (
      <div className="App">
        <h1>{TITLE}</h1>
        <Counter
          onChange={this.onCounterChange}
          count={this.state.count}
        />
        <Wallet
          onDeposit={this.onDeposit}
          onWithdraw={this.onWithdraw}
          total={this.state.total}
          count={this.state.count}
        />
      </div>
    );
  }
}

export default App;

// TODO I want to decouple this store from the App component
