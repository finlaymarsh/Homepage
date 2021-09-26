import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Nav className="me-auto nav">
          <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
          <NavLink exact to="/cv" activeClassName="active" className="nav-link">CV</NavLink>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;