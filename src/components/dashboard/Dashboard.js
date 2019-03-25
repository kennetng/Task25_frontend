import React, { Component } from "react";
import NavBar from "../navbar/NavbarPage";
import { ButtonToolbar, Button } from "react-bootstrap";
import ModalView from "./modalView";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false };
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div>
        <NavBar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px"
          }}
        >
          <ButtonToolbar>
            <Button
              variant="primary"
              onClick={() => this.setState({ modalShow: true })}
            >
              Add Restaurant
            </Button>
            <Button
              variant="primary"
              onClick={() => this.setState({ modalShow: true })}
            >
              Add Review
            </Button>
            <Button
              variant="primary"
              onClick={() => this.setState({ modalShow: true })}
            >
              Update my user
            </Button>
            <ModalView show={this.state.modalShow} onHide={modalClose} />
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default Dashboard;
