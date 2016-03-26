import { INIT, SHUFFLE } from '../dispatch/seizure';
import { fromJS } from 'immutable';
import { repeat, shuffle } from 'lodash';

export const init = (state, action) => {
  return Object.assign({},
    {
      colors: repeat(['red', 'orange', 'yellow', 'green', 'blue', 'purple'], 4),
    },
    state,
  );
}

export const randomizeColors = (state, action) => {
  const nextState = fromJS(state);
  return nextState.updateIn(['seizure', 'colors'], colors => shuffle(colors));
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
