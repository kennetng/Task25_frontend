import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./components/login/login";
import * as serviceWorker from "./serviceWorker";
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LaunchSite from "./components/landingpage/LaunchSite";

const cookies = new Cookies();

cookies.set("User", "Username", { path: "/" });
console.log(cookies.get("User"));

ReactDOM.render(
  <Router>
    <div>
      <Route path="/restaurant" exact component={LaunchSite} />
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
