import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";

const API = "https://restaurant-review-react.herokuapp.com/user/list";
const PROXYURL = "https://cors-anywhere.herokuapp.com/";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      role: 1
    };
  }

  componentDidMount() {
    axios.get(PROXYURL + API).then(json => this.setState({ store: json.data }));
  }
  handleRegisterForm(event) {
    console.log(event.target);
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    return (
      <Card bg="light" text="black" style={{ width: "18rem" }}>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicUsernameRegister">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChangeUsername.bind(this)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPasswordRegister">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.handleChangePassword.bind(this)}
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
    );
  }
}

export default LoginForm;