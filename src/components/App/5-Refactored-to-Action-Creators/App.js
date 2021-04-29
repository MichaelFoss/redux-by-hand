import { Component } from 'react';
import '../App.css';
import Wallet from '../../Wallet';
import Counter from '../../Counter';
import { connect } from 'react-redux';
import { updateCount, deposit, withdraw } from './action-creators';

const TITLE = 'Refactored to Action Creators';

class App extends Component {
  render() {
    const {
      count,
      total,
      updateCount,
      deposit,
      withdraw,
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
const mapDispatchToProps = dispatch => ({
  updateCount: value => dispatch(updateCount(value)),
  deposit: value => dispatch(deposit(value)),
  withdraw: value => dispatch(withdraw(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
