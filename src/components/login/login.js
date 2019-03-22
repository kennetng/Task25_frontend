import React, { Component } from "react";
import NavBar from "../navbar/NavbarPage";
import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";
import { Tab, Nav, Row, Col } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10vh",
            height: "50vh"
          }}
        >
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">SignUp</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <LoginForm />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <RegisterForm />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
  }
}

export default Login;
