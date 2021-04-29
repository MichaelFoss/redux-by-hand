import { Component } from 'react';
import Money from '../Money';
import './Counter.css';

class Counter extends Component {
  updateCount = (changeValue) => {
    const newValue = this.props.count + changeValue;
    this.props.onChange(newValue);
  };

  render() {
    return (
      <div className="Counter Component">
        <button onClick={() => this.updateCount(1)}>+</button>
        <button onClick={() => this.updateCount(-1)}>–</button>
        <Money>{this.props.count}</Money>
      </div>
    )
  }
}

export default Counter;
