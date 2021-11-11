import React, { Component } from "react";
import "../style/component/_personalData.scss";
import { Card, Alert } from "antd";
import { FieldTimeOutlined, RightOutlined } from "@ant-design/icons";

// import { color } from "../constants";
import Medium1 from "../assets/medium1.png";
import Medium2 from "../assets/medium2.png";
import Medium3 from "../assets/medium3.png";

export default class Experties extends Component {
  // // constructor() {
  // //   super();
  // //   this.state = {
  // //     warning: false,
  // //     data: [
  // //       {
  // //         id: 1,
  // //         title: "how to upload the image to node ...",
  // //         description:
  // //           "That being said, almost every interactive website today supports file uploads....",
  // //         read: false,
  // //         cover: Medium2,
  // //         link: "https://shravanmeena.medium.com/how-to-upload-the-image-to-node-server-using-multer-b4933f95cbfa",
  // //         date: "02 March 2021",
  // //       },
  // //     ],
  // //   };
  // // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       warning: false,
  //     });
  //   }, 6000);
  // }

  // Warn = () => {
  //   this.setState({
  //     warning: true,
  //   });
  // };
  render() {
    return (
      <div className={this.props.theme ? "mainBlogsDark" : "mainBlogs"}>
        <div className="innerPersonalDetails">
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
          <div className="right">
            <h4>
              I Am <span> MD ROHED</span> |
            </h4>
            <p>
              I'm a Software Engineer. I work with JavaScript and React to
              develop web applications. I am passionate about using latest
              Technology. It is all of experience just because I love developing
              Apps and learn new technologies
              <br /> I keep things simple, clean and efficient.
            </p>
            {/* <h6>Shravanmeena</h6> */}
          </div>
        </div>
      </div>
    );
  }
}
