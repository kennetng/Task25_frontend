import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import LaunchSite from "./containers/Launch";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <LaunchSite />
      </div>
    );
  }
}

export default App;
