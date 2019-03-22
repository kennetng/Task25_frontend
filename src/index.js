import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./components/login/login";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/search/Search";
import RestaurantSite from "./pages/Restaurants";
import Dashboard from "./components/dashboard/DashboardUpdateUser";
import Cookies from "universal-cookie";
import DashboardUpdateUser from "./components/dashboard/DashboardUpdateUser";
import DashboardAddReview from "./components/dashboard/DashboardAddReview";

const cookies = new Cookies();

cookies.set("User", "Username", {
  path: "/",
  expires: new Date(Date.now() + 2592000)
});
console.log(cookies.get("User"));

ReactDOM.render(
  <Router>
    <div>
      <Route path="/restaurants" exact component={RestaurantSite} />
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
      <Route path="/search" exact component={Search} />
      <Route path="/dashboard" exact component={DashboardUpdateUser} />
      <Route path="/review" exact component={DashboardAddReview} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
