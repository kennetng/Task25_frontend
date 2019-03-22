import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import NavbarPage from "../navbar/NavbarPage";
import axios from "axios";

const PROXYURL = "https://cors-anywhere.herokuapp.com/";
const API = "https://restaurant-review-react.herokuapp.com/restaurant/create";

class DashboardAddRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      description: "",
      category: "",
      user_id: ""
    };
  }

  handleCreateForm(event) {
    event.preventDefault();

    axios
      .post(PROXYURL + API, {
        name: this.state.name,
        address: this.state.address,
        description: this.state.description,
        category: this.state.category,
        user_id: this.state.user_id
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    this.setState({
      name: "",
      address: "",
      description: "",
      category: "",
      user_id: ""
    });
  }

  setName(event) {
    this.setState({ name: event.target.value });
  }

  setAddress(event) {
    this.setState({
      address: event.target.value
    });
  }
  setDescription(event) {
    this.setState({ description: event.target.value });
  }
  setCategory(event) {
    this.setState({ category: event.target.value });
  }
  setUserId(event) {
    this.setState({ user_id: event.target.value });
  }

  componentDidMount() {
    axios.get(PROXYURL + API).then(json => this.setState({ store: json.data }));
  }

  render() {
    const title1 = "Add new restaurant";

    return (
      <Card bg="light" text="black" style={{ width: "18rem" }}>
        <Card.Body>
          <h3 className="text-center">{title1}</h3>
          <br />
          <Form onSubmit={this.handleCreateForm.bind(this)}>
            <Form.Group controlId="formBasicSetRestaurantName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.setName.bind(this)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicSetRestaurantAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="address"
                placeholder="Address"
                value={this.state.address}
                onChange={this.setAddress.bind(this)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicSetRestaurantDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.setDescription.bind(this)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicSetRestaurantCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="category"
                placeholder="Category"
                value={this.state.category}
                onChange={this.setCategory.bind(this)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicSetUserId">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="user_id"
                placeholder="User ID"
                value={this.state.user_id}
                onChange={this.setUserId.bind(this)}
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
                Create
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default DashboardAddRestaurant;
