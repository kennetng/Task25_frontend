import React, { Component } from "react";
import {
  Form,
  Button,
  Card,
  Dropdown,
  InputGroup,
  DropdownButton
} from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const API = "https://restaurant-review-react.herokuapp.com/user/create";
const PROXYURL = "https://cors-anywhere.herokuapp.com/";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      role: "",
      target: "Add Role"
    };
  }

  handleRegisterForm(event) {
    event.preventDefault();

    axios
      .post(PROXYURL + API, {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        role: this.state.role
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    this.setState({
      username: "",
      password: "",
      email: "",
      role: "",
      target: "Add Role"
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
  handleTargetSearch(event) {
    if (event.target.text === "Reviewer") {
      this.setState(() => ({ role: 1 }));
    } else {
      this.setState(() => ({ role: 2 }));
    }
    this.setState({ target: event.target.text });
  }

  setCookie(event) {
    cookies.set("User", this.state.username, {
      path: "/",
      expires: new Date(Date.now() + 2592000)
    });
    console.log(cookies.get("User"));
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
            <Form.Group controlId="formBasicEmailRegister">
              <Form.Label>Role</Form.Label>

              <DropdownButton
                as={InputGroup.Append}
                variant="primary"
                title={this.state.target}
                id="input-group-dropdown-2"
              >
                <Dropdown.Item onClick={this.handleTargetSearch.bind(this)}>
                  Reviewer
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={this.handleTargetSearch.bind(this)}>
                  Owner
                </Dropdown.Item>
              </DropdownButton>
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
