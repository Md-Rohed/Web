import React, { Component } from "react";
import { Button } from "antd";

import { GithubFilled, YoutubeFilled } from "@ant-design/icons";
import "../style/component/_work.scss";
import memory from "../assets/memory.png";
import Tea from "../assets/Tea.png";

import Monorbit from "../assets/examhint.png";
import Ecommerce from "../assets/ecommerce.png";
import Calculator from "../assets/fininn.png";
import Funtube from "../assets/resumemaker.png";
import Airbnb from "../assets/newsapp.png";
import Social from "../assets/plack.png";

import Test from "../assets/newsapp.png";

export default class Work extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "memory",
          img: memory,
          img1: Test,
          github_link: "https://github.com/Md-Rohed/Go__Explore",
          live_link: " https://lucid-keller-1afe51.netlify.app/#/",
        },
        {
          id: 1,
          name: "Tea-shop",
          img: Tea,
          img1: Test,
          github_link: "https://github.com/Md-Rohed/Prince-tea-final-version",
          live_link: " https://quizzical-haibt-d67131.netlify.app/",
        },
      ],
    };
  }
  render() {
    return (
      <div className={this.props.theme ? "mainWorks" : "mainWorksDark"}>
        <div className="innerWorks">
          <h4>My Work & Portfolio</h4>
          <p>
            Take a moment to view some of my latest projects. While most of the
            project below were built by me from the ground up.
          </p>
          <div className="cardContainer">
            {this.state.data.map((item, index) => {
              return (
                <div key={index} className="card">
                  <div class="container">
                    <img src={item.img} className="image" alt="sd" />

                    {/* <picture>
                      <source srcset={item.img1} type='image/webp' />
                      <img className='image' src={item.img} alt='logo' />
                    </picture> */}

                    <div class="overlay">
                      <a rel="noreferrer" href={item.live_link} target="_blank">
                        Live
                      </a>

                      <a
                        rel="noreferrer"
                        href={item.github_link}
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: "flex" }}>
            <Button
              style={{ marginTop: 50, marginRight: 20 }}
              type="secondary"
              shape="round"
              size="large"
            >
              <a
                rel="noreferrer"
                href="https://github.com/Md-Rohed"
                target="_blank"
              >
                Visit Github <GithubFilled />
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
