import React from "react";
import axios from "axios";
import ReviewCard from "../restaurants/ReviewCard";
import RestaurantCard from "../restaurants/RestaurantCard";

const PROXYURL = "https://cors-anywhere.herokuapp.com/";
const API1 = "https://restaurant-review-react.herokuapp.com/restaurant/user/";
const API2 = "https://restaurant-review-react.herokuapp.com/review/list";

class DashboardListRestaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 1,
      restaurants: [],
      reviews: []
    };
  }

  componentDidMount() {
    axios
      .get(PROXYURL + API1 + this.state.user_id)
      .then(json => this.setState({ restaurants: json.data }));
    axios
      .get(PROXYURL + API2)
      .then(json => this.setState({ reviews: json.data }));
  }

  render() {
    const title1 = "Your restaurants:";

    return (
      <div>
        <div className="row-6">
          <h2>{title1}</h2>
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

export default DashboardListRestaurants;
