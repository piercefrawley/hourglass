import React from 'react';
import { connect } from 'react-redux';
import counterMapDispatch from '../redux/dispatch/counter';
import counterMapStateToProps from '../redux/selectors/counter';

function Counter({ count, increment, decrement }) {
  return (
    <div>
      Count: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default connect(
  counterMapStateToProps,
  counterMapDispatch,
)(Counter);
