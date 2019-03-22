import React, { Component } from "react";
import NavBar from "../navbar/NavbarPage";
import DashboardAddRestaurant from "./DashboardAddRestaurant";
import DashboardAddReview from "./DashboardAddReview";
import DashboardListRecentReviews from "./DashboardListRecentReviews";
import DashboardListRestaurants from "./DashboardListRestaurants";
import DashboardListReviews from "./DashboardListReviews";
import DashboardUpdateUser from "./DashboardUpdateUser";
import { Tab, Nav, Row, Col } from "react-bootstrap";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10vh",
            height: "50vh"
          }}
        >
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Add Restaurant</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Add Review</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">List Revent Reviews</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">List Restaurants</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">List Reviews</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth">Update User</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <DashboardAddRestaurant />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <DashboardAddReview />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <DashboardListRecentReviews />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <DashboardListRestaurants />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <DashboardListReviews />
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                    <DashboardUpdateUser />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
  }
}

export default Dashboard;
