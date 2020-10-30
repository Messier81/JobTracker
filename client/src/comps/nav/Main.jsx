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
          <div className="flex-container">
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
          </div>
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
