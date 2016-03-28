import React from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../redux/dispatch/seizure';
import mapStateToProps from '../redux/selectors/seizure';
import Panel from './Panel';

class Seizure extends React.Component {
  constructor(props) {
    super(props);
    props.init();
  }

  render() {
    const { colors = [], randomizeColors } = this.props;
    return (
      <div>
        <button onClick={randomizeColors}>RANDOMIZE</button>
        <div className="panel-container">
          {colors.map(color => (<Panel className={`${color} panel`}/>))}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Seizure)
