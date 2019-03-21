import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../login/login";

class NavBarPage extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="/">KPS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="">Search</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBarPage;
