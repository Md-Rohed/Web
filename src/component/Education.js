import React, { Component } from "react";
import { Tabs } from "antd";
import "../style/component/_education.scss";
const { TabPane } = Tabs;

export default class Education extends Component {
  render() {
    return (
      <div
        className={
          this.props.theme ? "mainEducationDetailsDark" : "mainEducationDetails"
        }
      >
        <div className="mainEdu">
          <div className="left">
            <h1>Personal Details</h1>

            <div className="details">
              <h4>
                Email: <span>mdrohed85@gmail.com</span>
              </h4>

              <h4>
                Address: <span>Airport,dhakkhhinkhan,dhaka </span>
              </h4>

              <h4>
                Contact: <span>01646981824</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
