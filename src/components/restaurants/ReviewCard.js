import React from "react";

const ReviewCard = props => {
  return (
    <div>
      <div className="card border-info mb-3">
        <div className="card-body text-info">
          <h4 className="card-title">{props.rating}</h4>
          <h6 className="card-text">{props.review}</h6>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
