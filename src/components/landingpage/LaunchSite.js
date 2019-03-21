import React from "react";
import "./LaunchSite.css";
import NavbarPage from "../navbar/NavbarPage";
import axios from "axios";
import ReviewCard from "../restaurants/ReviewCard";

const PROXYURL = "https://cors-anywhere.herokuapp.com/";
const API = "https://restaurant-review-react.herokuapp.com/review/list";

class LaunchSite extends React.Component {
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
    const title = "Recent reviews";

    return (
      <div>
        <div>
          <NavbarPage />
        </div>
        <div>
          <h2>{title}</h2>
          <ReviewList reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}

function ReviewList(props) {
  const reviews = props.reviews;
  const listReviews = reviews.map(res => (
    <ReviewCard rating={res.rating} review={res.review} />
  ));
  return <div className="row">{listReviews}</div>;
}

export default LaunchSite;
