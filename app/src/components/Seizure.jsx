import React from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../redux/dispatch/seizure';
import Panel from './Panel';

class Seizure extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.init();
  }

  render() {
    const {
      colors,
    } = this.props;
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
  return  {
    colors: state.colors || [],
    routing: state.routing,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Seizure)
