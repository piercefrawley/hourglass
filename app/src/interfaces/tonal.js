import React from 'react';
import { connect } from 'react-redux';

import getAudioContext from '../utils/getAudioContext';
import mapDispatchToProps from '../redux/dispatch/seizure';
import mapStateToProps from '../redux/selectors/seizure';

const generateTone = audioContext => n => {
  let oscillator = audioContext.createOscillator();

  oscillator.connect(audioContext.destination);

  oscillator.type = 'sine';
  oscillator.frequency.value = `${n}${n}0`;
  oscillator.detune.value = `${n}00`;

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + .25);
}

export default function createInterface(Component) {
  const audioContext = getAudioContext();

  class TonalInterface extends React.Component {
    shouldComponentUpdate(nextProps) {
      return true;
    }

    constructor(props) {
      super(props);
      props.init();
    }

    render() {
      const props = { ... this.props, generateTone: generateTone(audioContext)}
      return (
        <Component {...props}/>
      )
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TonalInterface);
}
