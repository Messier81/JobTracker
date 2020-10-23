import React from "react";
import "./Box.css";
import Col from "react-bootstrap/Col";

class Box extends React.Component {
  render() {
    //JSX
    return (
      <Col
        className="boxy"
        xs={12}
        sm={4}
        md={3}
        lg={3}
        xl={2}
        style={{
          backgroundColor:
            "#" +
            (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6),
        }}
      >
        1 of 2
      </Col>
    );
  }
}

export default Box;
