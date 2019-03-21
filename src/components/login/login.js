import React, { Component } from "react";
import NavBar from "../navbar/NavbarPage";
import { Form, Button, Card, Tab, Nav, Row, Col } from "react-bootstrap";
import axios from "axios";

const API = "https://restaurant-review-react.herokuapp.com/user/list";
const PROXYURL = "https://cors-anywhere.herokuapp.com/";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      store: [],
      login: "asda"
    };
  }
  componentDidMount() {
    axios.get(PROXYURL + API).then(json => this.setState({ store: json.data }));
  }
  registerForm() {
    console.log(this);
    alert(this);
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
                    <Card bg="light" text="black" style={{ width: "18rem" }}>
                      <Card.Body>
                        <Form>
                          <Form.Group controlId="formBasicUsernameLogin">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                              type="username"
                              placeholder="Username"
                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicPasswordLogin">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Password"
                            />
                          </Form.Group>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center"
                            }}
                          >
                            <Button variant="dark" type="submit">
                              Sign In
                            </Button>
                          </div>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Card bg="light" text="black" style={{ width: "18rem" }}>
                      <Card.Body>
                        <Form>
                          <Form.Group controlId="formBasicUsernameRegister">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                              type="username"
                              placeholder="Username"
                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicPasswordRegister">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Password"
                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicEmailRegister">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="Email" placeholder="Email" />
                          </Form.Group>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center"
                            }}
                          >
                            <Button
                              variant="dark"
                              onClick={this.registerForm.bind(this)}
                            >
                              Register
                            </Button>
                          </div>
                        </Form>
                      </Card.Body>
                    </Card>
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
