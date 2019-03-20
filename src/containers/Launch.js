import React from "react";

const launch = props => {
  return (
    <div className="col-xs-12">
      <h1 className="display-4 text-center">Works!</h1>
      <form>
        <input
          type="search"
          class="form-control"
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
