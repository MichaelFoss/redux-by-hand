import { Component } from 'react';
import '../App.css';
import Wallet from '../../Wallet';
import Counter from '../../Counter';
import { actionTypes } from './actions';
import { connect } from 'react-redux';

const TITLE = 'Enter React-Redux';

class App extends Component {
  render() {
    const {
      count,
      total,
      updateCount, /*                                              */
      deposit,     /* <-- Notice the change from events to actions */
      withdraw,    /*                                              */
    } = this.props;

    return (
      <div className="App">
        <h1>{TITLE}</h1>
        <Counter
          onChange={updateCount}
          count={count}
        />
        <Wallet
          onDeposit={() => deposit(count)}
          onWithdraw={() => withdraw(count)}
          total={total}
          count={count}
        />
      </div>
    );
  }
}

// State moved here
const mapStateToProps = state => {
  return {
    count: state.count,
    total: state.total,
  };
};

// Actions moved here
const mapDispatchToProps = (dispatch) => ({
  updateCount(value) {
    dispatch({
      type: actionTypes.counter.UPDATE,
      payload: {
        value,
      },
    });
  },

  deposit(value) {
    dispatch({
      type: actionTypes.total.DEPOSIT,
      payload: {
        value,
      },
    });
  },

  withdraw(value) {
    dispatch({
      type: actionTypes.total.WITHDRAW,
      payload: {
        value,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// TODO I don't want to pollute App with all of this Redux stuff
