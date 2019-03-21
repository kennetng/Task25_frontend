import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "../components/navbar/NavbarPage";
import RestaurantCard from "../components/restaurants/RestaurantCard";
import ReviewCard from "../components/restaurants/ReviewCard";
import dataFileRestaurant from "../dataRestaurant.json";
import dataFileReview from "../dataReview.json";

import axios from "axios";

const API = "https://restaurant-review-react.herokuapp.com/restaurant/list";
const PROXYURL = "https://cors-anywhere.herokuapp.com/";

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    axios
      .get(PROXYURL + API)
      .then(json => this.setState({ restaurants: json.data }));
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
          <RestaurantList restaurants={this.state.restaurants} />
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
    />
  ));
  return <div className="row">{listRestaurants}</div>;
}

function ReviewList(props) {
  const reviews = props.reviews;
  const listReviews = reviews.map(res => (
    <ReviewCard rating={res.rating} review={res.review} />
  ));
  return <div className="row">{listReviews}</div>;
}

export default Restaurants;
