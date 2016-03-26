export const INIT = 'INIT';
export const RANDOMIZE_COLORS = 'RANDOMIZE_COLORS';

function init() {
  return {
    type: INIT,
  }
}

function randomizeColors() {
  return {type: RANDOMIZE_COLORS}
}

export default function mapDispatchToProps(dispatch, props) {
  debugger;
  return {
    init: () => dispatch(init()),
    randomizeColors: () => dispatch(randomizeColors()),
  };
}
