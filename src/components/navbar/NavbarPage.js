import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavBarPage extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="/">KPS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/search">Search</Nav.Link>
            <NavDropdown.Divider />
            <LoginSetting />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
function LoginSetting() {
  if (sessionStorage.getItem("session") === null) {
    return <Nav.Link href="/login">Login</Nav.Link>;
  } else {
    return (
      <Nav>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <NavDropdown.Divider />
        <Nav.Link href="/logout">Log out</Nav.Link>
      </Nav>
    );
  }
}
export default NavBarPage;
