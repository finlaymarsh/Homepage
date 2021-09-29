import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../css/SANavbar.css'

class SANavigationBar extends Component {
  render() {
    return (
      <Navbar bg="light" defaultActiveKey="/home" className="flex-column">
        <Nav className="me-auto nav-text">
          <ul id="sa-nav">
            <li>
              <NavLink exact to="/sorting-algorithms" activeClassName="active" className="nav-link">General-Information</NavLink>
            </li>
            <li>
              <NavLink exact to="/sorting-algorithms/bubble-sort" activeClassName="active" className="nav-link">Bubble-Sort</NavLink>
            </li>
            <li>
              <NavLink exact to="/sorting-algorithms/insertion-sort" activeClassName="active" className="nav-link">Insertion-Sort</NavLink>
            </li>
            <li>
              <NavLink exact to="/sorting-algorithms/merge-sort" activeClassName="active" className="nav-link">Merge-Sort</NavLink>
            </li>
          </ul>
        </Nav>
      </Navbar>
    );
  }
}

export default SANavigationBar;