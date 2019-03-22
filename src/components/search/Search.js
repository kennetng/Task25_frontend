import React, { Component } from "react";
import NavBar from "../navbar/NavbarPage";
import RestaurantCard from "../restaurants/RestaurantCard";
import {
  Form,
  Button,
  FormControl,
  Dropdown,
  InputGroup,
  DropdownButton
} from "react-bootstrap";
import axios from "axios";

const API = "https://restaurant-review-react.herokuapp.com/restaurant/";
const PROXYURL = "https://cors-anywhere.herokuapp.com/";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      target: "Name",
      restaurants: [
        {
          key: "",
          id: "",
          name: "none",
          address: "",
          description: "",
          category: ""
        }
      ]
    };
  }
  handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      this.handleOnClick(this);
    }
  }
  handleOnClick(event) {
    axios
      .get(PROXYURL + API + this.state.target + "/" + this.state.search)
      .then(res => {
        this.setState({ restaurants: res.data });
      })
      .catch(error => {
        console.log(error.response);
      });
    RestaurantList(this.state);
    this.setState({ search: "" });
  }
  handleChange(event) {
    this.setState({ search: event.target.value });
  }
  handleTargetSearch(event) {
    this.setState({ target: event.target.text });
  }
  render() {
    return (
      <div>
        <NavBar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "2vh",
            height: "10vh"
          }}
        >
          <Form inline>
            <DropdownButton
              as={InputGroup.Append}
              variant="success"
              title={this.state.target}
              id="input-group-dropdown-2"
            >
              <Dropdown.Item onClick={this.handleTargetSearch.bind(this)}>
                Name
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={this.handleTargetSearch.bind(this)}>
                Category
              </Dropdown.Item>
            </DropdownButton>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={this.state.search}
              onChange={this.handleChange.bind(this)}
              onKeyPress={this.handleKeyPress.bind(this)}
            />

            <Button
              variant="outline-dark"
              onClick={this.handleOnClick.bind(this)}
            >
              Search
            </Button>
          </Form>
        </div>
        <div className="app container">
          <RestaurantList restaurants={this.state.restaurants} />
        </div>
      </div>
    );
  }
}
function RestaurantList(props) {
  const restaurants = props.restaurants;
  if (restaurants[0].name !== "none") {
    const listRestaurants = restaurants.map(res => (
      <RestaurantCard
        key={res.id}
        id={res.id}
        name={res.name}
        address={res.address}
        description={res.description}
        category={res.category}
      />
    ));
    return <div className="row">{listRestaurants}</div>;
  } else {
    return <div className="row" />;
  }
}

export default Search;
