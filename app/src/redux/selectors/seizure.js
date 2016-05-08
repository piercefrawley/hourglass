export default function mapStateToProps(state, props) {
  const seizure = state.seizure;
  return  {
    colors: seizure.get('colors', []),
    notes: seizure.get('notes', []),
    routing: state.routing,
  };
}
