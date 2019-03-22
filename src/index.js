import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./components/login/login";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/search/Search";
import RestaurantSite from "./pages/Restaurants";
import Cookies from "universal-cookie";
import DashboardUpdateUser from "./components/dashboard/DashboardUpdateUser";
import DashboardAddReview from "./components/dashboard/DashboardAddReview";
import DashboardListReviews from "./components/dashboard/DashboardListReviews";
import DashboardAddRestaurant from "./components/dashboard/DashboardAddRestaurant";
import DashboardListRestaurants from "./components/dashboard/DashboardListRestaurants";

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
      <Route path="/dashboardaddreview" exact component={DashboardAddReview} />
      <Route
        path="/dashboardlistreviews"
        exact
        component={DashboardListReviews}
      />
      <Route
        path="/dashboardaddrestaurant"
        exact
        component={DashboardAddRestaurant}
      />
      <Route
        path="/dashboardlistrestaurants"
        exact
        component={DashboardListRestaurants}
      />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
