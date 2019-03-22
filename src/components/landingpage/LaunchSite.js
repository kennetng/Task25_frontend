import React from "react";
import "./LaunchSite.css";
import NavbarPage from "../navbar/NavbarPage";
import axios from "axios";
import ReviewCard from "../restaurants/ReviewCard";
import RestaurantCard from "../restaurants/ReviewCard";

const PROXYURL = "https://cors-anywhere.herokuapp.com/";
const API1 = "https://restaurant-review-react.herokuapp.com/review/list";
const API2 = "https://restaurant-review-react.herokuapp.com/restaurant/list";

class LaunchSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      restaurants: []
    };
  }

  componentDidMount() {
    axios
      .get(PROXYURL + API1)
      .then(json => this.setState({ reviews: json.data }));
    axios
      .get(PROXYURL + API2)
      .then(json => this.setState({ restaurants: json.data }));
  }

  render() {
    const title1 = "Recent reviews";
    const title2 = "Top restaurants";

    return (
      <div>
        <div>
          <NavbarPage />
        </div>
        <div className="row-6">
          <h2>{title1}</h2>
          <ReviewList reviews={this.state.reviews} />
        </div>
        <div className="row-6">
          <h2>{title2}</h2>
          <RestaurantList restaurants={this.state.restaurants} />
        </div>
      </div>
    );
  }
}

function ReviewList(props) {
  const reviews = props.reviews;
  const listReviews = reviews.map(res => (
    <ReviewCard key={res.id} rating={res.rating} review={res.review} />
  ));
  return <div className="row">{listReviews}</div>;
}

function RestaurantList(props) {
  const restaurants = props.restaurants;
  const listRestaurants = restaurants.map(res => (
    <RestaurantCard
      key={res.id}
      name={res.name}
      address={res.address}
      description={res.description}
      category={res.category}
    />
  ));
  return <div className="row">{listRestaurants}</div>;
}

export default LaunchSite;
