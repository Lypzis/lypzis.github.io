import React, { Component } from 'react';

import sprite from '../../assets/icons/sprite.svg';

class Work extends Component {

  render() {
    return (
      <section className="section-work" id="section-work">
        <div className="work">

          <div className="work__box-list">
            <div className="work__box work__box-1">
              <div className="work__box-title">
                <h4 className="title-secondary">
                  Career Timeline
                </h4>
              </div>

              <a href="#popup" className="button button-label">

                <svg className="work__nav-icon">
                  <use xlinkHref={`${sprite}#icon-list`}></use>
                </svg>


              </a>
            </div>

            <div className="work__box work__box-2">
              <div className="work__box-title">
                <h4 className="title-secondary">
                  Latest Skill Showcase
                </h4>
              </div>

              <a href="#popup-2" className="button button-label" htmlFor="myEducation">

                <svg className="work__nav-icon">
                  <use xlinkHref={`${sprite}#icon-book`}></use>
                </svg>


              </a>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Work; 