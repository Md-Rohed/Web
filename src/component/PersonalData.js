import React, { Component } from "react";
import "../style/component/_personalData.scss";
export default class PersonalData extends Component {
  render() {
    return (
      <div
        className={
          this.props.theme ? "mainPersonalDetails" : "mainPersonalDetailsDark"
        }
      >
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
                Education:<span> Daffodil International Univeristy</span>
                <p>B.S.C in Software Engneering 2016-2021</p>
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
