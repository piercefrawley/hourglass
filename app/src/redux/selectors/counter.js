export default function mapStateToProps(state, props) {
  const counter = state.counter;
  return  {
    count: counter.get('count', 0),
    routing: state.routing,
  };
}
