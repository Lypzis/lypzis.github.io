import React, { Component } from 'react';

class Work extends Component {

    render() {
        return (
            <section className="section-work" id="section-work">
            <div className="work">
              <div className="row">
                <h3 className="title">
                  My Projects
                    </h3>
              </div>

              <div className="row">
                <div className="work__box-list">
                  <div className="work__box work__box-1">
                    <div className="work__box-title">
                      <h4 className="title-secondary">
                        Finished
                                </h4>
                    </div>

                    <a href="#popup" className="button button-label">
                      <i className="fas fa-list-alt"></i>
                    </a>
                  </div>

                  <div className="work__box work__box-2">
                    <div className="work__box-title">
                      <h4 className="title-secondary">
                        Currently Learning
                                </h4>
                    </div>

                    <a href="#popup-2" className="button button-label" htmlFor="myEducation">
                      <i className="fas fa-book"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Work; 