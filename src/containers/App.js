import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../hoc/Layout";
import Home from "./home/Home";
import About from "./about/About";
import Work from "./work/Work";
import Contact from "./contact/Contact";

import asygPicture from "../assets/images/asyg_logo.jpeg";
import vidyaPicture from "../assets/images/vidya_tecnologia_da_corros_o_logo.jpeg";
import evolootPicture from "../assets/images/evoloot-picture.png";
// import mindBlowGif from "../assets/images/mind-blowing.gif";
import forkifyLogo from "../assets/images/forkify_logo.png";
import natoursLogo from "../assets/images/natours_logo.png";

import toolsIcon from "../assets/icons/sprite2.svg";

class App extends Component {
  state = {
    logo: { route: "/" },
    navLinks: [
      { route: "/", icon: "icon-home3", name: "home" },
      { route: "/about", icon: "icon-info", name: "about" },
      { route: "/work", icon: "icon-user-tie", name: "work" },
      { route: "/contact", icon: "icon-mail3", name: "contact" },
    ],
  };

  render() {
    const maintenance = false;

    if (maintenance)
      return (
        <Layout logo={this.state.logo} navLinks={null}>
          {/* navLinks={this.state.navLinks} <i class="fas fa-pencil-ruler"></i>*/}
          <div className="error">
            <svg className="error__icon">
              <use xlinkHref={`${toolsIcon}#icon-tools`}></use>
            </svg>
            <h1 className="error__title">Under Maintenance!</h1>
          </div>
        </Layout>
      );

    return (
      <Layout logo={this.state.logo} navLinks={this.state.navLinks}>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<Home />}/>
        </Routes>

        <div className="popup" id="popup">
          <div className="popup__content">
            <a href="#section-work" className=" btn button__close">
              &times;
            </a>

            <h3 className="title-tertiary">Asyg</h3>
            <ol className="popup__list">
              <li className="popup__list-item">
                <div className="popup__box">
                  <figure className="popup__box-picture">
                    <img
                      src={asygPicture}
                      alt="Asyg"
                      className="popup__picture"
                    />
                  </figure>
                  <div className="popup__box-description">
                    <ul className="text">
                      <li>Implemented SDI (IBM) Connectors for integration with IBM Identity and Access Management software, utilizing various client APIs.</li>
                      <li>Back-end development using Rhino, a JavaScript implementation in Java.</li>
                      <li>Applied analytical and problem-solving skills to develop effective solutions for challenging situations.</li>
                    </ul>
                    <div className="popup__box-link">
                      <span>&nbsp;</span>
                      <p>2023 - 2024</p>
                    </div>
                  </div>
                </div>
              </li>
            </ol>

            <h3 className="title-tertiary">Vidya</h3>
            <ol className="popup__list">
              <li className="popup__list-item">
                <div className="popup__box">
                  <figure className="popup__box-picture">
                    <img
                      src={vidyaPicture}
                      alt="Vidya"
                      className="popup__picture"
                    />
                  </figure>
                  <div className="popup__box-description">
                    <ul className="text">
                      <li>Back-end development using the Spring framework.</li>
                      <li>Front-end development using the Vue framework.</li>
                      <li>Mobile development using React Native/Quasar frameworks.</li>
                      <li>Identified issues, analyzed information, and provided solutions to problems.</li>
                      <li>Enhanced communication skills through regular interactions with others.</li>
                    </ul>
                    <div className="popup__box-link">
                      <span>&nbsp;</span>
                      <p>2020 - 2022</p>
                    </div>
                  </div>
                </div>
              </li>
            </ol>

            <h3 className="title-tertiary">Evoloot</h3>
            <ol className="popup__list">
              <li className="popup__list-item">
                <div className="popup__box">
                  <figure className="popup__box-picture">
                    <img
                      src={evolootPicture}
                      alt="Evoloot Project"
                      className="popup__picture"
                    />
                  </figure>
                  <div className="popup__box-description">
                    <ul className="text">
                      <li>Front-end development using React and Phaser-ce frameworks.</li>
                      <li>Utilization of Parse Server and Stripe APIs.</li>
                      <li>Use of PhoneGap tool for mobile deployment.</li>
                      <li>Committed to continuous learning and improvement.</li>
                    </ul>
                    <div className="popup__box-link">
                      <span>&nbsp;</span>
                      <p>2018 - 2019</p>
                    </div>
                  </div>
                </div>
              </li>
            </ol>

            {/* 
            <h3 className="title-tertiary">My Linkedin Profile</h3>
            <ol className="popup__list">
              <li className="popup__list-item">
                <div className="popup__box">
                  <figure className="popup__box-picture">
                    <img
                      src={mindBlowGif}
                      alt="Mind Blow"
                      className="popup__picture"
                    />
                  </figure>
                  <div className="popup__box-description">
                    <p className="text">
                      Here you can check more details about those positions.
                    </p>
                    <div className="popup__box-link">
                      <span>&nbsp;</span>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/victor-piccoli-2490381a6/"
                        rel="noopener noreferrer"
                        className="btn button__link"
                      >
                        To LinkedIn
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ol>  */}


          </div>
        </div>

        <div className="popup" id="popup-2">
          <div className="popup__content  popup__content--small">
            <a href="#section-work" className=" btn button__close">
              &times;
            </a>

            <h3 className="title-tertiary">Forkify</h3>
            <div className="popup__box popup__box--no-border-bottom">
              <figure className="popup__box-picture">
                <img
                  src={forkifyLogo}
                  alt="Forkify Logo"
                  className="popup__picture"
                />
              </figure>
              <div className="popup__box-description">
                <p className="text">
                  Created in <strong>OutSystems</strong>, makes the usage of third party API to display recipes.
                </p>
                <div className="popup__box-link">
                  <span>&nbsp;</span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://personal-keiuowi1.outsystemscloud.com/Forkify/Forkify?_ts=638532694487800560"
                    className="btn button__link"
                  >
                    view page <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <h3 className="title-tertiary">Natours</h3>
            <div className="popup__box popup__box--no-border-bottom">
              <figure className="popup__box-picture">
                <img
                  src={natoursLogo}
                  alt="Forkify Logo"
                  className="popup__picture"
                />
              </figure>
              <div className="popup__box-description">
                <p className="text">
                  Created in <strong>OutSystems</strong>, makes the usage of MongoDB to store and retrieve data about tours, perform authentication and payments with Stripe API.
                  <br></br>
                  Note: You can't sign up &#128542;... but here is a user for you &#128526;: 
                  <br></br>
                  user: tester02@example.io 
                  <br></br>
                  password: 1234pass
                </p>
                <div className="popup__box-link">
                  <span>&nbsp;</span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://personal-keiuowi1.outsystemscloud.com/Natours/Home?_ts=638532694451147400"
                    className="btn button__link"
                  >
                    view page <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
