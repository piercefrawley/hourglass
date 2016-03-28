import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { shuffle } from 'lodash';

export const INIT = 'INIT';
export const RANDOMIZE_COLORS = 'RANDOMIZE_COLORS';

export const initialize = createAction(INIT);
export const randomize = createAction(RANDOMIZE_COLORS);

export const init = () => dispatch => dispatch(initialize());
export const randomizeColors = () => dispatch => dispatch(randomize());

export default handleActions({
  [INIT]: state =>
    state.set('colors', ['red', 'orange', 'yellow', 'green', 'blue', 'purple']),
  [RANDOMIZE_COLORS]: state =>
    state.update('colors', colors => shuffle(colors)),
}, fromJS({}));
