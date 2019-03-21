import React from "react";

const RestaurantCard = props => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4">
      <div className="card text-white bg-info mb-3">
        <div className="card-header">
          <div>
            <button>Edit</button>
          </div>
        </div>
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <h6 className="card-text">{props.address}</h6>
          <h6 className="card-text">Description: {props.description}</h6>
          <h6 className="card-text">Category: {props.category}</h6>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="map"
                width="270"
                height="270"
                id="gmap_canvas"
                src={
                  "https://maps.google.com/maps?q=" +
                  props.address +
                  "&t=&z=13&ie=UTF8&iwloc=&output=embed"
                }
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              />
            </div>
          </div>
          <div>
            <h4>Reviews</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
