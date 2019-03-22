import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import NavbarPage from "../navbar/NavbarPage";
import axios from "axios";

const PROXYURL = "https://cors-anywhere.herokuapp.com/";
const API = "https://restaurant-review-react.herokuapp.com/user/update";

class DashboardUpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      username: "",
      password: "",
      email: ""
    };
  }

  handleUpdateForm(event) {
    event.preventDefault();

    axios
      .post(PROXYURL + API, {
        user_id: this.state.user_id,
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
      user_id: "",
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
  setUserId(event) {
    this.setState({ user_id: event.target.value });
  }

  componentDidMount() {
    axios.get(PROXYURL + API).then(json => this.setState({ store: json.data }));
  }

  render() {
    const title1 = "Update User Information";

    return (
      <Card bg="light" text="black" style={{ width: "18rem" }}>
        <Card.Body>
          <h3 className="text-center">{title1}</h3>
          <br />
          <Form onSubmit={this.handleUpdateForm.bind(this)}>
            <Form.Group controlId="formBasicUserIDRegister">
              <Form.Label>Where User ID is:</Form.Label>
              <Form.Control
                type="username"
                placeholder="Username"
                value={this.state.user_id}
                onChange={this.setUserId.bind(this)}
              />
            </Form.Group>
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
                Update
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default DashboardUpdateUser;
