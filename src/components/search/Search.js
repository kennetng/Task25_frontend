import React, { Component } from "react";
import NavBar from "../navbar/NavbarPage";
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
      target: "Name"
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
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.response);
      });
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
      </div>
    );
  }
}

export default Search;
