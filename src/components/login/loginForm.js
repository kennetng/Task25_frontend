import React, { Component } from "react";
import { Form, Button, Card, Badge } from "react-bootstrap";
import axios from "axios";
import PropTypes from "prop-types";

const API = "https://restaurant-review-react.herokuapp.com/login";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      role: "",
      store: {},
      error: ""
    };
  }
  static contextTypes = {
    router: PropTypes.object
  };

  handleLoginForm(event) {
    event.preventDefault();

    if (this.state.username !== "" && this.state.password !== "") {
      axios
        .post(API, {
          username: this.state.username,
          password: this.state.password
        })
        .then(json => {
          this.setState({ store: json.data });
          sessionStorage.setItem("session", JSON.stringify(json.data));
          this.context.router.history.push(`/`);
        })
        .catch(error => {
          this.setState({ error: error });
        });
    }
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div>
        <Card bg="light" text="black" style={{ width: "18rem" }}>
          <Card.Body>
            <Form onSubmit={this.handleLoginForm.bind(this)}>
              <Form.Group controlId="formBasicUsernameLogin">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChangeUsername.bind(this)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPasswordLogin">
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
                <Button variant="dark" type="Submit">
                  Sign In
                </Button>
              </div>
            </Form>
            <br />
            <p>
              Status:
              <Badge pill variant="danger">
                Not logged in(Not working atm)
              </Badge>
            </p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default LoginForm;
