import React from "react";
import NavbarPage from "../navbar/NavbarPage";
import axios from "axios";
import RestaurantCard from "../restaurants/RestaurantCard";

const PROXYURL = "https://cors-anywhere.herokuapp.com/";
const API = "https://restaurant-review-react.herokuapp.com/restaurant/user/";

class DashboardListRestaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 2,
      restaurants: []
    };
  }

  componentDidMount() {
    axios
      .get(PROXYURL + API + this.state.user_id)
      .then(json => this.setState({ restaurants: json.data }));
  }

  render() {
    const title1 = "Your restaurants:";

    return (
      <div>
        <div className="row-6">
          <h2>{title1}</h2>
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

export default DashboardListRestaurants;
