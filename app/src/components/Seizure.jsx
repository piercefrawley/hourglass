import React from 'react';
import Panel from './Panel';
import TonalInterface from '../interfaces/tonal';


class Seizure extends React.Component {
  constructor(props) {
    super(props);
    props.init();
  }

  _onMouseOverPanel(n) {
    this.props.generateTone(n);
    this.props.addNote({ index: n });
  }

  render() {
    const {
      colors = [],
      notes = [],
      randomizeColors,
      generateTone,
      addNote,
    } = this.props;
    return (
      <div className="flex-container-column">
        <button onClick={randomizeColors}>
          <span>RANDOMIZE</span>
        </button>
        <div className="flex-container-row">
          {colors.map((color, n) => (
            <Panel
              className={`${color} panel`}
              note={notes[n]}
              onMouseOver={() => this._onMouseOverPanel(n)}
              />
          ))}
        </div>
      </div>
    );
  }
}
  export default TonalInterface(Seizure);
