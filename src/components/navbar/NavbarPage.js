import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

class NavBarPage extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">KPS Restaurant Review</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#restaurants">Restaurants</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="#login">
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Nav.Link>
            {/*
                                       
                            aria-owns={open ? "menu-appbar" : undefined}
                      }
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          
            */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBarPage;
