import React, { Component } from "react";
import NavBar from "../navbar/NavbarPage";

class Search extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="app container" />
        <div className="col-12" style={{ marginTop: 2 + "em" }}>
          <div className="col-6">
            <input
              className="form-control"
              type="text"
              placeholder="What would you like to search for?"
              aria-label="Search"
            />
          </div>
          <div className="col-6 text-center" style={{ marginTop: 0.2 + "em" }}>
            <button
              type="button"
              className="btn btn-dark center-block"
              style={{ marginTop: 0.2 + "em" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
