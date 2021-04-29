import { Component } from 'react';
import '../App.css';
import Wallet from './Wallet';
import Counter from './Counter';

const TITLE = 'Broken Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{TITLE}</h1>
        <Counter />
        <Wallet />
      </div>
    );
  }
}

export default App;

// TODO I need the Wallet to get data from the Counter
