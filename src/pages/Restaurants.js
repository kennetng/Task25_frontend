import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "../components/navbar/NavbarPage";
import RestaurantCard from "../components/restaurants/RestaurantCard";
import dataFile from "../data.json";

class Restaurants extends Component {
  state = {
    restaurants: dataFile.restaurants
  };

  render() {
    const title = "My's Restaurants!";
    const restaurants = this.state.restaurants;

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

export default Restaurants;
