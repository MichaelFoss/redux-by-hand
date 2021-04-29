import { Component } from 'react';
import '../App.css';
import Wallet from '../../Wallet';
import Counter from '../../Counter';

const TITLE = 'Basic Counter';

class App extends Component {
  state = {
    count: 0,
    total: 0,
  };

  onCounterChange = value => this.setState({ count: value });

  onDeposit = () => this.setState({ total: this.state.total + this.state.count });
  onWithdraw = () => this.setState({ total: this.state.total - this.state.count });

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

// TODO I want a global store for all data
