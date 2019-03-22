import React from "react";
import NavbarPage from "../navbar/NavbarPage";
import axios from "axios";
import ReviewCard from "../restaurants/ReviewCard";

const PROXYURL = "https://cors-anywhere.herokuapp.com/";
const API = "https://restaurant-review-react.herokuapp.com/review/list";

class DashboardListReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    axios
      .get(PROXYURL + API)
      .then(json => this.setState({ reviews: json.data }));
  }

  render() {
    const title1 = "Your reviews:";

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

export default DashboardListReviews;
