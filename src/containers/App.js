import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../hoc/Layout';
import Home from './home/Home';
import About from './about/About';
import Work from './work/Work';
import Contact from './contact/Contact';

import lypzisPicture from '../assets/images/lypzis-picture.jpg';
import trilloPicture from '../assets/images/trillo-picture.jpg';
import natourPicture from '../assets/images/natour-picture.jpg';
import omnifoodPicture from '../assets/images/omnifood-picture.jpg';
import forkifyPicture from '../assets/images/forkify-picture.jpg';
import mindBlowGif from '../assets/images/mind-blowing.gif';
import reactLogo from '../assets/images/React.png';

class App extends Component {
  state = {
    logo: { route: '/' },
    navLinks: [
      { route: '/', icon: 'icon-home3', name: 'home' },
      { route: '/about', icon: 'icon-info', name: 'about' },
      { route: '/work', icon: 'icon-user-tie', name: 'work' },
      { route: '/contact', icon: 'icon-mail3', name: 'contact' },
    ]
  }

  render() {
    return (
      <Layout logo={this.state.logo} navLinks={this.state.navLinks} >
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/work" component={Work} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        

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
      </Layout>
    );
  }
}

export default App;