import React from 'react';
import { connect } from 'react-redux';
import counterMapDispatch from '../redux/dispatch/counter';
import counterMapStateToProps from '../redux/ducks/counter';

function Counter({ model, dispatch }) {
  return (
    <div>
      Count: {model}
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
    </div>
  );
}

export default connect(
  counterMapDispatch,
  counterMapStateToProps,
)(Counter);
