import React from 'react';
import { Link } from 'react-router';

class Index extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="seizure">Seizure</Link>
          </li>
          <li>
            <Link to="counter">Counter</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}


export default Index;
