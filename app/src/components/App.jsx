import React, { PropTypes } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

require('../styles/App.scss');

export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div class='root-level'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">App</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem><Link to="/about">About</Link></NavItem>
            <NavItem><Link to="/realm">Realm</Link></NavItem>
            <NavItem><Link to="/seizure">Seizure</Link></NavItem>
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}
