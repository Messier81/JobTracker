import React from "react";
import "./Box.css";
import Col from "react-bootstrap/Col";
import EditPic from "../../images/edit.svg";

import MovePic from "../../images/move.svg";
import LinkPic from "../../images/link.svg";

import GarbagePic from "../../images/garbage.svg";

class Box extends React.Component {
  render() {
    const colours = [
      "#dcd930",
      "#ff6b6b",
      "#fec405",
      "#25c47b",
      "#4ecdc4",
      "#1ca8e3",
      "#0070fb",
      "#1c3554",
      "#6a4feb",
      "#ada8c6",
      "#667fb1",
      "#fb8036",
    ];
    const colour = colours[Math.floor(Math.random() * colours.length)];
    //JSX
    return (
      <div
        style={{
          backgroundColor: colour,
        }}
      >
        <div className="parent">
          <div className="div1 job-title">Junior Software Developer</div>
          <div className="div2 job-company non-title">
            Company: Roots Canada
          </div>
          <div className="div3 job-apply-date non-title">
            Applied: 28 / 10 / 2020
          </div>
          <div className="div4 job-update-date non-title">
            Updated: 28 / 10 / 2020
          </div>
          <div className="div5 bot-icons">
            <a href="your landing page url">
              <img className="bot-icons" src={EditPic} alt="" />
            </a>
          </div>
          <div className="div6 bot-icons">
            <a href="your landing page url">
              <img className="bot-icons" src={MovePic} alt="" />
            </a>
          </div>
          <div className="div7 bot-icons">
            <a href="your landing page url">
              <img className="bot-icons" src={LinkPic} alt="" />
            </a>
          </div>
          <div className="div8 bot-icons">
            <a href="your landing page url">
              <img className="bot-icons" src={GarbagePic} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
