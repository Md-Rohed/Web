import React, { Component } from "react";
import "../style/component/_contact.scss";
import { Card, Input, Button, Alert } from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      warning: false,
      data: [
        {
          id: 1,
          icon: <PhoneOutlined />,
          title: "Phone",
          contact: "01646981824",
          type: "phone",
          secContact: "01646981824",
          description: "Let's have a call",
        },
        {
          id: 2,
          icon: <MailOutlined />,
          title: "Email",
          type: "email",

          contact: "mdrohed85@gmail.com",
          description: "Drop me a line",
        },

        {
          id: 3,
          icon: <EnvironmentOutlined />,
          title: "Location",
          type: "location",
          contact: "View on Google map",
          description: "airport,Dhakkhinkhan, Dhaka",
        },
      ],
    };
  }

  Warn = () => {
    this.setState({
      warning: true,
    });
  };
  render() {
    return (
      <div className={this.props.theme ? "mainContactDark" : "mainContact"}>
        <div className="innerContact">
          <h4>Contact Me</h4>
          <h5>
            I'm happy to answer any question you have or provide an estimate.
            Just send me a message in the form below with any questions you may
            have.
          </h5>

          <div className="cardContainer">
            {this.state.data.map((item, index) => {
              return (
                <Card className="card" key={index}>
                  <span
                    style={
                      this.props.theme
                        ? { color: "#0d1117" }
                        : { color: "rgba(211, 211, 211, 0.774)" }
                    }
                  >
                    {item.icon}
                  </span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  {/* {item.type == "phone" ? (
                    <h6>
                      <a href={`tel:${item.contact}`}>{item.contact}</a>
                    </h6>
                  ) : null} */}

                  {item.type === "phone" ? (
                    <h6>
                      <a href={`tel:${item.secContact}`}>{item.secContact}</a>
                    </h6>
                  ) : null}

                  {item.type === "email" ? (
                    <h6>
                      <a href={`mailto:${item.contact}`}>{item.contact}</a>
                    </h6>
                  ) : null}

                  {item.type === "location" ? (
                    <h6>
                      <a
                        rel="noreferrer"
                        href="https://goo.gl/maps/3cpqRL8WgxpVZdhp8"
                        target="_blank"
                      >
                        {item.contact}
                      </a>
                    </h6>
                  ) : null}
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
