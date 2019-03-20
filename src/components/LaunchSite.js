import React from "react";
import "./Launch.css";

const launch = props => {
  return (
    <div className="col-xs-12">
      <div className="text-right">
        <p>Hello</p>
      </div>
      <h1 className="display-4 text-center">Works!</h1>
      <form>
        <input
          type="search"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Search"
        />
        <div className="text-center">
          <button className="btn btn-primary" id="singlebutton">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default launch;
