import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="nav-bar">
        <Nav className="me-auto nav-text">
          <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
          <NavLink exact to="/cv" activeClassName="active" className="nav-link">CV</NavLink>
          <NavLink exact to="/sorting-algorithms" activeClassName="active" className="nav-link">Sorting-Algorithms</NavLink>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;