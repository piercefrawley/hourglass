import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { shuffle } from 'lodash';

const NUM_ROWS = 6;
export const INIT = 'INIT';
export const RANDOMIZE = 'RANDOMIZE_COLORS';
export const ADD = 'ADD_NOTE';

export const initialize = createAction(INIT);
export const randomize = createAction(RANDOMIZE);
export const add = createAction(ADD);

export const init = () => dispatch => {
  const colors = Array.apply(null, Array(NUM_ROWS)).map(() => {
    return ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
  });
  dispatch(initialize({ notes: [], colors: [].concat.apply([], colors) }));
}

export const randomizeColors = () => (dispatch, getState) => {
  const { seizure } = getState();
  dispatch(randomize({colors: shuffle(seizure.get('colors', []))}));
};
export const addNote = (note) => dispatch => dispatch(add(note));

export default handleActions({
  [INIT]: (state, { payload: { notes, colors }}) => {
    return  state
      .set('notes', notes)
      .set('colors', colors);
  },
  [RANDOMIZE]: (state, { payload: { colors }}) => {
    return state.set('colors', colors);
  },
  [ADD]: (state, { payload: { note } }) => {
    return state.update('notes', notes => {
      notes.push(note);
      return notes;
    });
  },
}, fromJS({}));
