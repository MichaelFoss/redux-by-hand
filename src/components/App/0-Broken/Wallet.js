import { Component } from 'react';
import Money from '../../Money';
import '../../Wallet/Wallet.css';

class Wallet extends Component {
  state = {
    total: 0,
  };

  onDeposit = () => {
    // TODO Add counter value to state.total
  }

  onWithdraw = () => {
    // TODO Subtract counter value to state.total
  }

  render() {
    return (
      <div className="Wallet Component">
        <div className="controls">
          <button onClick={this.onDeposit}>Deposit</button>
          <button onClick={this.onWithdraw}>Withdraw</button>
        </div>
        <div className="total">
          Total:<Money>{this.state.total}</Money>
        </div>
      </div>
    );
  }
}

export default Wallet;
