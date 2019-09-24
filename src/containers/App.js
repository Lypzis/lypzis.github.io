import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../hoc/Layout';
import Home from './home/Home';
import About from './about/About';
import Work from './work/Work';
import Contact from './contact/Contact';

import lypzisPicture from '../assets/images/lypzis-picture.jpg';
import evolootPicture from '../assets/images/evoloot-picture.png';
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

            <h3 className="title-tertiary">Lypzis.github.io</h3>
            <ol className="popup__list">

              <li className="popup__list-item">
                <div className="popup__box">
                  <figure className="popup__box-picture">
                    <img src={lypzisPicture} alt="Lypzis Project" className="popup__picture" />
                  </figure>
                  <div className="popup__box-description">
                    <p className="text">
                      This page, I've put all my effort into design it, using most of what I've learned so
                      far.
                      Have you found the hidden easter eggs?
                            </p>
                    <div className="popup__box-link">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lypzis/Lypzis.github.io/tree/development"
                        className="btn button__link">source code <span>&rarr;</span></a>
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
                    <img src={evolootPicture} alt="Evoloot Project" className="popup__picture" />
                  </figure>
                  <div className="popup__box-description">
                    <p className="text">
                      A gamified business world, it's currently in prototype version.
                            </p>
                    <div className="popup__box-link">
                      <a target="_blank" href="https://evoloot.github.io/evolootApp/" rel="noopener noreferrer"
                        className="btn button__link">view page <span>&rarr;</span></a>
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
                      have time to finish are all safe on my repositories
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
            <h3 className="title-tertiary">React-Redux</h3>
            <div className="popup__box popup__box--no-border-bottom">
              <figure className="popup__box-picture">
                <img src={reactLogo} alt="React Logo" className="popup__picture" />
              </figure>
              <div className="popup__box-description">
                <p className="text">
                  A global data storage for React applications.
                    </p>
                <div className="popup__box-link">
                  <a target="_blank" rel="noopener noreferrer" href="https://lypzis.github.io/redux-react/" className="btn button__link">view page <span>&rarr;</span></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lypzis/redux-react" className="btn button__link">source code <span>&rarr;</span></a>
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