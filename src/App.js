import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import LaunchSite from "./components/landingpage/LaunchSite";
import NavigationBar from "./components/navbar/NavbarPage";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="app container">
          <LaunchSite />
        </div>
      </div>
    );
  }
}

export default App;
