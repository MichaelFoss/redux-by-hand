import './Money.css';

const Money = ({ children }) => {
  const num = Number(children || 0);
  const classes = [ 'Money', num < 0 && 'negative' ].join(' ');

  return (
    <span className={classes}>
      {num < 0 ? '-' : ''}${Math.abs(num)}
    </span>
  );
};

export default Money;
