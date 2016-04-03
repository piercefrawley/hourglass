import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { shuffle } from 'lodash';

const NUM_ROWS = 1;
export const INIT = 'INIT';
export const RANDOMIZE_COLORS = 'RANDOMIZE_COLORS';
export const ADD_NOTE = 'ADD_NOTE';

export const initialize = createAction(INIT);
export const randomize = createAction(RANDOMIZE_COLORS);
export const add = createAction(ADD_NOTE);

export const init = () => dispatch => {
  const colors = Array.apply(null, Array(NUM_ROWS)).map(() => {
    return ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
  });
  dispatch(initialize({ notes: {}, colors: [].concat.apply([], colors) }));
}

export const randomizeColors = () => dispatch => dispatch(randomize());
export const addNote = (note) => dispatch => {
  dispatch(add());
}

export default handleActions({
  [INIT]: (state, { payload: { notes, colors }}) => {
    return  state
      .set('notes', notes)
      .set('colors', colors);
  },
  [RANDOMIZE_COLORS]: (state) => {
    return state.update('colors', colors => shuffle(colors));
  },
  [ADD_NOTE]: (state, { payload: { note } }) => {
    return state.update('notes', notes => notes.push(note));
  },
}, fromJS({}));
