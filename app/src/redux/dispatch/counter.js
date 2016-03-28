import { increment, decrement } from '../ducks/counter';

export default function counterMapDispatch(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  }
}
