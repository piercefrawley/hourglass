export default function mapStateToProps(state, props) {
  const seizure = state.seizure;
  return  {
    colors: seizure.get('colors', []),
    routing: state.routing,
  };
}
