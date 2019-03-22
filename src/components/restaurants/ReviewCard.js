import React from "react";

const ReviewCard = props => {
  return (
    <div className="card border-secondary mb-3">
      <div className="card-body">
        <h4 className="card-title">{props.rating}</h4>
        <h6 className="card-text">{props.review}</h6>
      </div>
    </div>
  );
};

export default ReviewCard;
