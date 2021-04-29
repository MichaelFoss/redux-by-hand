import Money from '../Money';
import './Wallet.css';

const Wallet = props => (
  <div className="Wallet Component">
    <div className="controls">
      <button onClick={props.onDeposit}>Deposit</button>
      <button onClick={props.onWithdraw}>Withdraw</button>
    </div>
    <div className="total">
      Total:<Money>{props.total}</Money>
    </div>
  </div>
);

export default Wallet;
