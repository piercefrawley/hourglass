import React from 'react';
import { Link } from 'react-router';

export default function NavLinks({routerParams: {routes}}) {
  debugger;
  return (
    <div className='flex-container-row'>
      <button className='router-link'>
        <Link to="seizure">seizure</Link>
      </button>
      <button className='router-link'>
        <Link to="counter">counter</Link>
      </button>
    </div>
  )
}
