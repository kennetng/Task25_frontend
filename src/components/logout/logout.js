import React, { Component } from "react";
import PropTypes from "prop-types";

class Logout extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  componentDidMount() {
    sessionStorage.removeItem("session");
    this.context.router.history.push(`/`);
  }
  render() {
    return <div />;
  }
}

export default Logout;
