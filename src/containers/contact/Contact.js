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
                <a href="mailto:victor.piccoli@pm.me" title="mail to victor.piccoli@pm.me"
                  target="_blank" rel="noopener noreferrer" className="btn button-name">victor.piccoli@pm.me</a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact; 