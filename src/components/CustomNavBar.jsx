import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import './CustomNavBar.css';

class NavBar extends Component {
    render() {
      return (
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>CodeWorld.io</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} componentClass={Link} href='/' to='/'>
                Home
              </NavItem>
              <NavItem eventKey={2} componentClass={Link} href='/about' to='/about'>
                About
              </NavItem>
              <NavItem eventKey={3} componentClass={Link} href='/News' to='/news'>
                News
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
}

export default NavBar;