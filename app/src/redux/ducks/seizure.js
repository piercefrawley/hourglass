import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { shuffle } from 'lodash';

const NUM_ROWS = 6;
export const INIT = 'INIT';
export const RANDOMIZE_COLORS = 'RANDOMIZE_COLORS';

export const initialize = createAction(INIT);
export const randomize = createAction(RANDOMIZE_COLORS);

export const init = () => dispatch => {
  const colors = Array.apply(null, Array(NUM_ROWS)).map(() => {
    return ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
  })
  dispatch(initialize({colors: [].concat.apply([], colors)}));
}

export const randomizeColors = () => dispatch => dispatch(randomize());


export default handleActions({
  [INIT]: (state, {payload: {colors}}) => state.set('colors', colors),
  [RANDOMIZE_COLORS]: (state) => state.update('colors', colors => shuffle(colors)),
}, fromJS({}));
