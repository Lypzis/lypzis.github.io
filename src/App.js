import React, { Component } from 'react';

import logo from './assets/images/Logo-Transparent.png';
import lypzisPicture from './assets/images/lypzis-picture.jpg';
import trilloPicture from './assets/images/trillo-picture.jpg';
import natourPicture from './assets/images/natour-picture.jpg';
import omnifoodPicture from './assets/images/omnifood-picture.jpg';
import forkifyPicture from './assets/images/forkify-picture.jpg';
import mindBlowGif from './assets/images/mind-blowing.gif';
import reactLogo from './assets/images/React.png';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <header className="header">
          <div className="header__logo-box">
            <img src={logo} alt="Logo" className="header__logo" />
          </div>

          <div className="header__text-box">
            <div className="heading-primary">
              <h1 className="heading-primary--main">
                Hello, I'm Victor
                </h1>
              <h2 className="heading-primary--sub">
                Web Developer &amp; Designer
                </h2>
            </div>

            <a href="#section-about" className="button button-animated button__section">Know More</a>
          </div>
        </header>

        <main>
          <section className="section-about">
            <div className="about" id="section-about">
              <div className="row">
                <h3 className="title">
                  About Myself
                    </h3>
              </div>
              <div className="row">
                <figure className="about__picture">
                  <img className="about__picture-photo"
                    src="https://avatars1.githubusercontent.com/u/32135239?s=460&v=4" alt="dist/img/author.jpg" />
                  <a href="https://twitter.com/Lypzis" target="_blank" rel="noopener noreferrer" className="btn button-name">Victor V.
                            Piccoli</a>
                </figure>
                <div className="about__description">
                  <p className="text">
                    I'm Victor, an expert in front-end development helping in the creation of beautiful,
                    responsive and functional websites. I enjoy shaping simple and yet
                    effective designs along with a clean, descriptive and well commented code.
                            <br></br>
                    I have very diverse and liberal ideas and I'm a geek for technology and innovation, and a
                    big fan of open source softwares. I also
                    love to make experiments and
                    learning from them. At my free time, I mostly enjoy playing games(mainly the strategic hard
                    ones), laughing at memes and watching series.
                            <br></br>
                    I began coding in 2015, at University, using Java to make my first "hello world" and starting
                    my passion for this. Since that, I wanted more and more, started studying a lot at home,
                    it made me realize how much more effective it was and how boring and unnecessary was
                    for me to have to go the University, being obligated to "learn" multiple subjects rather than to
                    focus on what I really like.
                    Met with Javascript around 2017, on online courses, and for its flexibility and ease to
                    write, I really liked it, leaving Java in my memory box ...and the University for later completion.
                    Since then, I have been studying by my own.
                            <br></br>
                  </p>
                  <br></br>
                  <br></br>
                  <div className="about__description-quote-box">
                    <p className="text quote">
                      "If you know me based on what I was a year ago, you don't know me anymore. My evolution
                      is constant. Allow me to introduce myself again".
                            </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
        </main>

        <footer className="footer">
          <p className="text">© 2019 by Lypzis. All rights reserved. </p>
          <p title="The W3C CSS Validation Service">
            <a target="_blank" rel="noopener noreferrer"
              href="http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Flypzis.github.io%2F&amp;profile=css3svg&amp;usermedium=all&amp;warning=0&amp;vextwarning=">
              <img src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" />
            </a>
          </p>
        </footer>

        <div className="popup" id="popup">
          <div className="popup__content">
            <a href="#section-work" className=" btn button__close">&times;</a>

            <h3 className="title-tertiary">Sass & CSS</h3>
            <ol className="popup__list">

              <li className="popup__list-item">
                <div className="popup__box">
                  <figure className="popup__box-picture">
                    <img src={lypzisPicture} alt="Lypzis Project" className="popup__picture" />
                  </figure>
                  <div className="popup__box-description">
                    <p className="text">
                      This page, I've put all my effort into design it using everything that I've learned so
                      far about Sass and CSS. It is fully responsive.
                      Have you found the hidden easter eggs?
                            </p>
                    <div className="popup__box-link">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lypzis/Lypzis.github.io/tree/development"
                        className="btn button__link">source code <span>&rarr;</span></a>
                    </div>
                  </div>
                </div>
              </li>

              <li className="popup__list-item">
                <div className="popup__box">
                  <figure className="popup__box-picture">
                    <img src={trilloPicture} alt="Trillo Project" className="popup__picture" />
                  </figure>
                  <div className="popup__box-description">
                    <p className="text">
                      My latest project, a page to search for hotels. I use the power of flexbox to obtain
                      aligned and well placed elements.
                            </p>
                    <div className="popup__box-link">
                      <a target="_blank" href="https://lypzis.github.io/Sass/Trillo/" rel="noopener noreferrer"
                        className="btn button__link">view page <span>&rarr;</span></a>
                      <a target="_blank" href="https://github.com/Lypzis/Sass/tree/master/Trillo" rel="noopener noreferrer"
                        className="btn button__link">source code <span>&rarr;</span></a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="popup__list-item">
                <div className="popup__box">
                  <figure className="popup__box-picture">
                    <img src={natourPicture} alt="Natour Project" className="popup__picture" />
                  </figure>
                  <div className="popup__box-description">
                    <p className="text">
                      A travel agency's website. Here some early (and some in experimental) CSS resources are in
                      place.
                            </p>
                    <div className="popup__box-link">
                      <a target="_blank" href="https://lypzis.github.io/Sass/Natour/" rel="noopener noreferrer"
                        className="btn button__link">view page <span>&rarr;</span></a>
                      <a target="_blank" href="https://github.com/Lypzis/Sass/tree/master/Natour" rel="noopener noreferrer"
                        className="btn button__link">source code <span>&rarr;</span></a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="popup__list-item">
                <div className="popup__box">
                  <figure className="popup__box-picture">
                    <img src={omnifoodPicture} alt="Omnifood Project" className="popup__picture" />
                  </figure>
                  <div className="popup__box-description">
                    <p className="text">
                      A restaurant's page and also my introduction to some sofisticated use of CSS, it uses
                      Jquery to help with some of the effects.
                            </p>
                    <div className="popup__box-link">
                      <a target="_blank" href="https://lypzis.github.io/Html-Css/Omnifood/" rel="noopener noreferrer"
                        className="btn button__link">view page <span>&rarr;</span></a>
                      <a target="_blank" href="https://github.com/Lypzis/Html-Css/tree/master/Omnifood" rel="noopener noreferrer"
                        className="btn button__link">source code <span>&rarr;</span></a>
                    </div>
                  </div>
                </div>
              </li>
            </ol>

            <h3 className="title-tertiary">Javascript&emsp;/&emsp;ES6</h3>
            <ol className="popup__list">

              <li className="popup__list-item">
                <div className="popup__box">
                  <figure className="popup__box-picture">
                    <img src={forkifyPicture} alt="Forkify Project" className="popup__picture" />
                  </figure>
                  <div className="popup__box-description">
                    <p className="text">
                      A recipes' page. In here I use ES6 to handle all the functionality of the website. It
                      does need some polishment, so I'll be adding updates in the near future.
                            </p>
                    <div className="popup__box-link">
                      <a target="_blank" href="https://lypzis.github.io/Javascript/forkify/dist/" rel="noopener noreferrer"
                        className="btn button__link">view page <span>&rarr;</span></a>
                      <a target="_blank" href="https://github.com/Lypzis/Javascript/tree/master/forkify" rel="noopener noreferrer"
                        className="btn button__link">source code <span>&rarr;</span></a>
                    </div>
                  </div>
                </div>
              </li>
            </ol>

            <h3 className="title-tertiary">...and much more</h3>
            <ol className="popup__list">

              <li className="popup__list-item">
                <div className="popup__box">
                  <figure className="popup__box-picture">
                    <img src={mindBlowGif} alt="Mind Blow" className="popup__picture" />
                  </figure>
                  <div className="popup__box-description">
                    <p className="text">
                      Many of my projects that are experimental, old, can't display or did not
                      have time to finish are all safe on repositories
                      waiting for resurrection or purpose. They will be on the hightlights again one day.
                            </p>
                    <div className="popup__box-link">
                      <a target="_blank" href="https://github.com/Lypzis" rel="noopener noreferrer" className="btn button__link">On GitHub
                                    <span>&rarr;</span></a>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="popup" id="popup-2">
          <div className="popup__content  popup__content--small">
            <a href="#section-work" className=" btn button__close">&times;</a>
            <h3 className="title-tertiary">React</h3>
            <div className="popup__box popup__box--no-border-bottom">
              <figure className="popup__box-picture">
                <img src={reactLogo} alt="React Logo" className="popup__picture" />
              </figure>
              <div className="popup__box-description">
                <p className="text">
                  Introduction to React, a framework for creating dynamic components based UIs
                    </p>
                <div className="popup__box-link">
                  <a target="_blank" rel="noopener noreferrer" href="https://lypzis.github.io/React/" className="btn button__link">view page <span>&rarr;</span></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lypzis/React/tree/master/react-complete-guide" className="btn button__link">source code <span>&rarr;</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;