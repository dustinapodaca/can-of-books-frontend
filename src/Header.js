import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className='mx-5'>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link text-white mx-5">Home</Link></NavItem>
        <NavItem><Link to="/About" className="nav-link text-white mx-5">About</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;
