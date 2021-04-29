import { Component } from 'react';
import Money from '../../Money';
import '../../Counter/Counter.css';

class Counter extends Component {
  state = {
    count: 0,
  };

  updateCount = (changeValue) => {
    const newCount = this.state.count + changeValue;
    this.setState({
      count: newCount,
    });
  };

  render() {
    return (
      <div className="Counter Component">
        <button onClick={() => this.updateCount(1)}>+</button>
        <button onClick={() => this.updateCount(-1)}>–</button>
        <Money>{this.state.count}</Money>
      </div>
    )
  }
}

export default Counter;
