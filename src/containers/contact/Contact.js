import React, { Component } from 'react';

import sprite from '../../assets/icons/sprite.svg';

class Contact extends Component {

  render() {
    return (
      <section className="section-contact">
        <div className="contact">

          <div className="contact__box">
            <ol className="contact__list">
              <li className="contact__list-item">
                <svg className="contact__nav-icon mail">
                  <use xlinkHref={`${sprite}#icon-mail3`}></use>
                </svg>
                <a href="mailto:victorvp2018@protonmail.com" title="mail to victorvp2018@protonmail.com"
                  target="_blank" rel="noopener noreferrer" className="btn button-name">victorvp2018@protonmail.com</a>
              </li>
              <li className="contact__list-item">
                <svg className="contact__nav-icon twitter">
                  <use xlinkHref={`${sprite}#icon-twitter`}></use>
                </svg>
                <a href="https://twitter.com/Lypzis" target="_blank" rel="noopener noreferrer" className="btn button-name">@Lypzis</a>
              </li>
              <li className="contact__list-item">
                <svg className="contact__nav-icon facebook">
                  <use xlinkHref={`${sprite}#icon-facebook2`}></use>
                </svg>
                <a href="https://www.facebook.com/Lypzis" target="_blank" rel="noopener noreferrer"
                  className="btn button-name">&frasl;Lypzis</a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact; 