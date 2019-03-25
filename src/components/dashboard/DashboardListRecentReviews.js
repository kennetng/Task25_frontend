import React from "react";
import axios from "axios";
import ReviewCard from "../restaurants/ReviewCard";

const API = "https://restaurant-review-react.herokuapp.com/review/user/";

class DashboardListRecentReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_id: 1,
      reviews: []
    };
  }

  componentDidMount() {
    axios
      .get(API + this.state.restaurant_id)
      .then(json => this.setState({ reviews: json.data }));
  }

  render() {
    const title1 = "Your recent reviews:";

    return (
      <div>
        <div className="row-6">
          <h2>{title1}</h2>
          <ReviewList reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}

function ReviewList(props) {
  const reviews = props.reviews;
  const listReviews = reviews.map(res => (
    <ReviewCard key={res.id} rating={res.rating} review={res.review} />
  ));
  return <div className="row">{listReviews}</div>;
}

export default DashboardListRecentReviews;
