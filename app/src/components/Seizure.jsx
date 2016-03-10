import React from 'react';
import Panel from './Panel';
import { shuffle } from 'lodash';

export default class Seizure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        'red', 'orange', 'yellow', 'green', 'blue', 'purple',
        'red', 'orange', 'yellow', 'green', 'blue', 'purple',
        'red', 'orange', 'yellow', 'green', 'blue', 'purple',
        'red', 'orange', 'yellow', 'green', 'blue', 'purple',
      ],
    };
  }

  randomizeColors(colors) {
    this.setState({
      colors: shuffle(colors),
    });
  }

  render() {
    const {
      colors,
    } = this.state;
    return (
      <div>
        <button onClick={() => this.randomizeColors(colors)}>
          Randomize Seizure
        </button>
        <div className="panel-container">
          {colors.map(color => <Panel className={`${color} panel`}/>)}
        </div>
      </div>
    );
  }
}
