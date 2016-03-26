import React from 'react';
import { connect } from 'react-redux';
import Panel from './Panel';

class Seizure extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, init } = this.props;
    debugger;
    dispatch(init());
  }


  render() {
    const {
      colors,
    } = this.props;
    debugger;
    return (
      <div>
        <button>
          Randomize Seizure
        </button>
        <div className="panel-container">
          {colors.map(color => <Panel className={`${color} panel`}/>)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  debugger;
  return {
    colors: state.get('colors', []),
  }
}

export default connect(mapStateToProps)
