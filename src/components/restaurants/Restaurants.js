import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";

import axios from "axios";

const APIrestaurant =
  "https://restaurant-review-react.herokuapp.com/restaurant/list";
const APIreviews = "https://restaurant-review-react.herokuapp.com/review/list";

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
      .get(APIrestaurant)
      .then(json => this.setState({ restaurants: json.data }));
  }
  handleOnClick() {
    console.log("H");
    axios.get(APIreviews).then(json => this.setState({ reviews: json.data }));
  }
  render() {
    return (
      <div>
        <div>
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
    <div className="col-xs-12 col-sm-6 col-md-4">
      <div className="card text-white bg-info mb-3">
        <div className="card-header">
          <div>
            <button type="button" class="btn btn-outline-dark btn-lg btn-block">
              Edit
            </button>
          </div>
          <RestaurantCard
            key={res.id}
            id={res.id}
            name={res.name}
            address={res.address}
            description={res.description}
            category={res.category}
            reviews={props.reviews}
          />
        </div>
      </div>
    </div>
  ));
  return <div className="row">{listRestaurants}</div>;
}

export default Restaurants;
