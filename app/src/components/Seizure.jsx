import React from 'react';
import Panel from './Panel';
import TonalInterface from '../interfaces/tonal';


class Seizure extends React.Component {
  constructor(props) {
    super(props);
    props.init();
  }

  render() {
    const { colors = [], randomizeColors, generateTone } = this.props;
    return (
      <div className="flex-container-column">
        <button onClick={randomizeColors}>
          <span>RANDOMIZE</span>
        </button>
        <div className="flex-container-row">
          {colors.map((color, n) => (
            <Panel
              className={`${color} panel`}
              onMouseOver={() => generateTone(n)}
              />
          ))}
        </div>
      </div>
    );
  }
}
  export default TonalInterface(Seizure);
