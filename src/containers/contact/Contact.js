import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return (
            <section className="section-contact">
            <div className="contact">
              <div className="row">
                <h3 className="title">
                  Get in Contact
                    </h3>
              </div>

              <div className="row">
                <div className="contact__box">
                  <ol className="contact__list">
                    <li className="contact__list-item">
                      <i className="fas fa-envelope"></i>
                      <a href="mailto:victorvp2018@protonmail.com" title="mail to victorvp2018@protonmail.com"
                        target="_blank" rel="noopener noreferrer" className="btn button-name">victorvp2018@protonmail.com</a>
                    </li>
                    <li className="contact__list-item">
                      <i className="fab fa-twitter"></i>
                      <a href="https://twitter.com/Lypzis" target="_blank" rel="noopener noreferrer" className="btn button-name">@Lypzis</a>
                    </li>
                    <li className="contact__list-item">
                      <i className="fab fa-facebook-square"></i>
                      <a href="https://www.facebook.com/Lypzis" target="_blank" rel="noopener noreferrer"
                        className="btn button-name">&frasl;Lypzis</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Contact; 