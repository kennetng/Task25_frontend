import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import LaunchSite from "./components/landingpage/LaunchSite";
import RestaurantSite from "./pages/Restaurants";

const cookies = new Cookies();

cookies.set("User", "Username", { path: "/" });
console.log(cookies.get("User"));

ReactDOM.render(
  <Router>
    <div>
      <Route path="/restaurants" exact component={RestaurantSite} />
      <Route path="/" exact component={App} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
