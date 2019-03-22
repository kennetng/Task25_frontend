import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "../components/navbar/NavbarPage";
import RestaurantCard from "../components/restaurants/RestaurantCard";
import ReviewCard from "../components/restaurants/ReviewCard";

import axios from "axios";

const APIrestaurant =
  "https://restaurant-review-react.herokuapp.com/restaurant/list";
const APIreviews = "https://restaurant-review-react.herokuapp.com/review/list";
const PROXYURL = "https://cors-anywhere.herokuapp.com/";

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      reviews: []
    };
  }

  componentDidMount() {
    axios
      .get(PROXYURL + APIrestaurant)
      .then(json => this.setState({ restaurants: json.data }));

    axios
      .get(PROXYURL + APIreviews)
      .then(json => this.setState({ reviews: json.data }));
  }

  render() {
    const title = "My's Restaurants!";

    return (
      <div>
        <div>
          <NavigationBar />
        </div>
        <div>
          <h2>{title}</h2>
          <RestaurantList
            restaurants={this.state.restaurants}
            reviews={this.state.reviews}
          />
        </div>
      </div>
    );
  }
}

function RestaurantList(props) {
  const restaurants = props.restaurants;
  const listRestaurants = restaurants.map(res => (
    <RestaurantCard
      key={res.id}
      id={res.id}
      name={res.name}
      address={res.address}
      description={res.description}
      category={res.category}
      reviews={props.reviews}
    />
  ));
  return <div className="row">{listRestaurants}</div>;
}

function ReviewList(props) {
  const reviews = props.reviews;
  const listReviews = reviews.map(res => (
    <ReviewCard key={res.id} rating={res.rating} review={res.review} />
  ));
  return (
    <div className="row">
      <ul>{listReviews}</ul>
    </div>
  );
}

export default Restaurants;
