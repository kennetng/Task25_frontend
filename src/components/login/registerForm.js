import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";

const API = "https://restaurant-review-react.herokuapp.com/user/create";
const PROXYURL = "https://cors-anywhere.herokuapp.com/";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      role: 1
    };
  }

  handleRegisterForm(event) {
    event.preventDefault();

    axios
      .post(PROXYURL + API, {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        role: 1
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    this.setState({
      username: "",
      password: "",
      email: ""
    });
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <Card bg="light" text="black" style={{ width: "18rem" }}>
        <Card.Body>
          <Form onSubmit={this.handleRegisterForm.bind(this)}>
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
                value={this.state.password}
                onChange={this.handleChangePassword.bind(this)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmailRegister">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="Email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChangeEmail.bind(this)}
              />
            </Form.Group>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button variant="dark" type="Submit">
                Register
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default RegisterForm;
