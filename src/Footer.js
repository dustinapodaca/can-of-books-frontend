import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-bottom">
        <Navbar.Brand className="mx-auto">&#169; Dustin Apodaca & Maximo VincenteMejia</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
