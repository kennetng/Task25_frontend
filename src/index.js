import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./components/login/login";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/search/Search";
import RestaurantSite from "./components/restaurants/Restaurants";
import Logout from "./components/logout/logout";
import Dashboard from "./components/dashboard/Dashboard";

ReactDOM.render(
  <Router>
    <div>
      <Route path="/restaurants" exact component={RestaurantSite} />
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/search" exact component={Search} />
      <Route path="/dashboard" exact component={Dashboard} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
