import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/Logo-Transparent.png";

import sprite from "../assets/icons/sprite.svg";

const toolbar = (props) => {
  const navLinksListItems = props.toolbarLinks
    ? props.toolbarLinks.map((toolbarLink) => {
        return (
          <li key={toolbarLink.name} className="navigation__list-item">
            <Link to={toolbarLink.route} className="navigation__link">
              <svg className="nav-icon">
                <use xlinkHref={`${sprite}#${toolbarLink.icon}`}></use>
              </svg>
              <p className="navigation__link-name">{toolbarLink.name}</p>
            </Link>
          </li>
        );
      })
    : null;

  return (
    <React.Fragment>
      <h1 className="app-title">
        <figure className="logo-container">
          <Link to={props.logo.route} className="header__logo-box">
            <img src={logo} alt="Logo" className="header__logo" />
          </Link>
        </figure>
      </h1>
      <nav className="navigation">
        <ol className="navigation__list">
          {navLinksListItems && navLinksListItems}
        </ol>
      </nav>
    </React.Fragment>
  );
};

export default toolbar;
