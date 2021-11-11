import React, { Component } from "react";
import "../style/component/_experties.scss";
import { Card, Progress } from "antd";
import { color } from "../constants";
// import Mongodb from "../assets/m.jpeg";
// import Express from "../assets/e.jpeg";
// import ReactJs from "../assets/r.jpeg";
// import Node from "../assets/n.jpeg";
// import Js from "../assets/js.jpg";
// import Rn from "../assets/rn.png";
// import Sass from "../assets/sass.png";
// import GITHUB from "../assets/github-mark.png";
export default class Experties extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "Html & CSS",

          percent: "60",
          desc: "With lots of unique blocks, you can easily build a page without coding.",
        },

        {
          id: 2,
          name: "JAVASCRIPT",
          percent: "80",
          desc: "With lots of unique blocks, you can easily build a page without coding.",
        },
        {
          id: 3,
          name: "React",
          percent: "60",
          desc: "With lots of unique blocks, you can easily build a page without coding.",
        },

        {
          id: 5,
          name: "MongoDB",
          percent: "50",
          desc: "With lots of unique blocks, you can easily build a page without coding.",
        },

        {
          id: 8,
          name: "GITHUb",
          percent: "60",
          desc: "With lots of unique blocks, you can easily build a page without coding.",
        },
      ],
    };
  }
  render() {
    return (
      <div className={this.props.theme ? "mainExperties" : "mainExpertiesDark"}>
        <div className="innerExperties">
          <h4>Skills </h4>

          <div className="cardContainer">
            {this.state.data.map((item, index) => {
              return (
                <Card key={index} className="card">
                  <div className="cardHeader">
                    <h4>{item.name}</h4>
                  </div>
                  {/* <div style={{ position: "absolute", top: 0, right: 0 }}>
                    <h4 style={{ background: "red" }}>{item.percent}</h4>
                  </div> */}

                  <Progress
                    percent={item.percent}
                    status="active"
                    strokeColor={this.props.theme ? color : "#0d11179d"}
                  />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
