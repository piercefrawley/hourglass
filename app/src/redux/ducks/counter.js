import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const inc = createAction(INCREMENT);
const dec = createAction(DECREMENT);

export const increment = () => dispatch => dispatch(inc());
export const decrement = () => dispatch => dispatch(dec());

export default handleActions({
  [INCREMENT]: state => state.update('count', count => count+1),
  [DECREMENT]: state => state.update('count', count => count-1),
}, fromJS({ count: 0 }));
