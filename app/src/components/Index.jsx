import React from 'react';
import { Link } from 'react-router';

class Index extends React.Component {
  render() {
    return (
      <div>
        <span className='flex-container-row'>
          <button className='router-link'>
            <Link to="/">Home</Link>
          </button>
          <button className='router-link'>
            <Link to="seizure">Seizure</Link>
          </button>
          <button className='router-link'>
            <Link to="counter">Counter</Link>
          </button>
        </span>
        {this.props.children}
      </div>
    )
  }
}


export default Index;
