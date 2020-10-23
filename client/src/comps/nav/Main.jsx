import React from "react";
import { Container, Row, Tab, Tabs } from "react-bootstrap";

import Box from "../box/Box";
import "../box/Box.css";

class Main extends React.Component {
  render() {
    //JSX

    return (
      <Tabs defaultActiveKey="tab-1" id="uncontrolled-tab">
        <Tab eventKey="tab-1" title="Home">
          <Container fluid>
            <Row className="justify-content-center">
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="tab-2" title="Profile">
          dasd
        </Tab>
        <Tab eventKey="tab-3" title="Contact">
          aaaaaaaaaaaaaa
        </Tab>
      </Tabs>
    );
  }
}

export default Main;
