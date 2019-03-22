import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import NavbarPage from "../navbar/NavbarPage";
import axios from "axios";

const PROXYURL = "https://cors-anywhere.herokuapp.com/";
const API = "https://restaurant-review-react.herokuapp.com/restaurant/update";

class UpdateRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      description: "",
      category: "",
      restaurant_id: ""
    };
  }

  handleUpdateForm(event) {
    event.preventDefault();

    axios
      .post(PROXYURL + API, {
        name: this.state.name,
        address: this.state.address,
        description: this.state.description,
        category: this.state.category,
        restaurant_id: this.state.restaurant_id
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
      restaurant_id: ""
    });
  }

  changeName(event) {
    this.setState({ name: event.target.value });
  }

  changeAddress(event) {
    this.setState({
      address: event.target.value
    });
  }
  changeDescription(event) {
    this.setState({ description: event.target.value });
  }
  changeCategory(event) {
    this.setState({ category: event.target.value });
  }
  setRestaurantId(event) {
    this.setState({ restaurant_id: event.target.value });
  }

  componentDidMount() {
    axios.get(PROXYURL + API).then(json => this.setState({ store: json.data }));
  }

  render() {
    const title1 = "Update Restaurant Information";

    return (
      <Card bg="light" text="black" style={{ width: "18rem" }}>
        <Card.Body>
          <h3 className="text-center">{title1}</h3>
          <br />
          <Form onSubmit={this.handleUpdateForm.bind(this)}>
            <Form.Group controlId="formBasicChangeName">
              <Form.Label>Change name to</Form.Label>
              <Form.Control
                type="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.changeName.bind(this)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicChangeAddress">
              <Form.Label>Change address to</Form.Label>
              <Form.Control
                type="address"
                placeholder="Address"
                value={this.state.address}
                onChange={this.changeAddress.bind(this)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicChangeDescription">
              <Form.Label>Change description to</Form.Label>
              <Form.Control
                type="description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.changeDescription.bind(this)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicChangeCategory">
              <Form.Label>Change category to</Form.Label>
              <Form.Control
                type="category"
                placeholder="Category"
                value={this.state.category}
                onChange={this.changeCategory.bind(this)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicSetRestaurantId">
              <Form.Label>Where restaurant ID is</Form.Label>
              <Form.Control
                type="restaurant_id"
                placeholder="Restaurant ID"
                value={this.state.restaurant_id}
                onChange={this.setRestaurantId.bind(this)}
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

export default UpdateRestaurant;
