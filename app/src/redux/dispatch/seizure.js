import { init, randomizeColors, addNote } from '../ducks/seizure';

export default function seizureMapDispatch(dispatch) {
  return {
    init: () => dispatch(init()),
    randomizeColors: () => dispatch(randomizeColors()),
    addNote: (note) => dispatch(addNote({note})),
  }
}
