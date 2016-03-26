import { fromJS } from 'immutable';
import { repeat, shuffle } from 'lodash';

function init(state, action) {
  return state.setIn(['seizure', 'colors'],
    repeat(['red', 'orange', 'yellow', 'green', 'blue', 'purple'], 4)
  );
}

function randomizeColors(state, action) {
  return state.updateIn(['seizure', 'colors'], colors => shuffle(colors));
}

export default function seizure(state = fromJS({}), action) {
  switch (action.type) {
    case INIT:
      init();
      break;
    case SHUFFLE:
      randomizeColors();
      break;
    default:
      return state;
  }
}
