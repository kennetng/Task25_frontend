import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import NavbarPage from "../navbar/NavbarPage";
import axios from "axios";

const PROXYURL = "https://cors-anywhere.herokuapp.com/";
const API = "https://restaurant-review-react.herokuapp.com/review/create";

class DashboardAddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "",
      reviewText: "",
      user_id: "",
      restaurant_id: ""
    };
  }

  handleCreateForm(event) {
    event.preventDefault();

    axios
      .post(PROXYURL + API, {
        rating: this.state.rating,
        reviewText: this.state.reviewText,
        user_id: this.state.user_id,
        restaurant_id: this.state.restaurant_id
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    this.setState({
      rating: "",
      reviewText: "",
      user_id: "",
      restaurant_id: ""
    });
  }

  setRating(event) {
    this.setState({ rating: event.target.value });
  }

  setReviewText(event) {
    this.setState({
      reviewText: event.target.value
    });
  }
  setUserId(event) {
    this.setState({ user_id: event.target.value });
  }
  setRestaurantId(event) {
    this.setState({ restaurant_id: event.target.value });
  }

  componentDidMount() {
    axios.get(PROXYURL + API).then(json => this.setState({ store: json.data }));
  }

  render() {
    const title1 = "Create new review";

    return (
      <Card bg="light" text="black" style={{ width: "18rem" }}>
        <Card.Body>
          <h3 className="text-center">{title1}</h3>
          <br />
          <Form onSubmit={this.handleCreateForm.bind(this)}>
            <Form.Group controlId="formBasicSetUserRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="rating"
                placeholder="Rating"
                value={this.state.rating}
                onChange={this.setRating.bind(this)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicSetUserReview">
              <Form.Label>Review</Form.Label>
              <Form.Control
                type="review"
                placeholder="Review"
                value={this.state.reviewText}
                onChange={this.setReviewText.bind(this)}
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
            <Form.Group controlId="formBasicSetRestaurantId">
              <Form.Label>Restaurant ID</Form.Label>
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

export default DashboardAddReview;
