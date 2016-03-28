import { init, randomizeColors } from '../ducks/seizure';

export default function seizureMapDispatch(dispatch) {
  return {
    init: () => dispatch(init()),
    randomizeColors: () => dispatch(randomizeColors()),
  }
}
