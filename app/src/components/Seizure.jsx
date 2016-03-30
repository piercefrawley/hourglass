import React from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../redux/dispatch/seizure';
import mapStateToProps from '../redux/selectors/seizure';
import Panel from './Panel';

const audioContext = new AudioContext();

class Seizure extends React.Component {
  constructor(props) {
    super(props);
    props.init();
  }

  _generateTone(n) {
    let oscillator = audioContext.createOscillator();

    oscillator.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.value = `${n}${n}0`;
    oscillator.detune.value = `${n}00`;

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + .05);
  }

  render() {
    const { colors = [], randomizeColors } = this.props;
    return (
      <div className="flex-container-column">
        <button onClick={randomizeColors}>
          <span>RANDOMIZE</span>
        </button>
        <div className="flex-container-row">
          {colors.map((color, n) => (
            <Panel
              className={`${color} panel`}
              onMouseOver={() => this._generateTone(n)}
              index={n}
              />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Seizure)
