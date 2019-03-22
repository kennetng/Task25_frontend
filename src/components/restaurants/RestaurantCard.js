import React from "react";
import "./style.css";

import ReviewCard from "./ReviewCard";

const RestaurantCard = props => {
  const reviewsFilter = props.reviews.filter(
    review => review.restaurantId === props.id
  );

  const reviews = reviewsFilter.map(review => {
    return (
      <ReviewCard
        key={review.id}
        rating={review.rating}
        review={review.review}
      />
    );
  });

  return (
    <div className="card-body container-fluid cardclass">
      <h4 className="card-title">{props.name}</h4>
      <h6 className="card-text">{props.address}</h6>
      <h6 className="card-text">Description: {props.description}</h6>
      <h6 className="card-text">Category: {props.category}</h6>
      <div className="mapouter">
        <div className="gmap_canvas resp-container">
          <iframe
            class="resp-iframe"
            title="map"
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
        <div className="scroll">{reviews}</div>
      </div>
    </div>
  );
};
export default RestaurantCard;
