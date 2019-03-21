import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "../components/navbar/NavbarPage";
import RestaurantCard from "../components/restaurants/RestaurantCard";
import ReviewCard from "../components/restaurants/ReviewCard";
import dataFileRestaurant from "../dataRestaurant.json";
import dataFileReview from "../dataReview.json";

class Restaurants extends Component {
  state = {
    restaurants: dataFileRestaurant.restaurants,
    reviews: dataFileReview.reviews
  };

  render() {
    const title = "My's Restaurants!";
    const restaurants = this.state.restaurants;
    const reviews = this.state.reviews;

    return (
      <div>
        <div>
          <NavigationBar />
        </div>
        <h2>{title}</h2>
        <RestaurantList restaurants={restaurants} />
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
