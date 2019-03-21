import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "../components/navbar/NavbarPage";
import RestaurantCard from "../components/restaurants/RestaurantCard";

class Restaurants extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="app container" />
        <h1>Welcome to restaurant</h1>
      </div>
    );
  }
}

export default Restaurants;
