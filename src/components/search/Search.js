import React, { Component } from "react";
import NavBar from "../navbar/NavbarPage";

class Search extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="app container" />
        <div class="md-form mt-0">
          <input
            class="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
    );
  }
}

export default Search;
