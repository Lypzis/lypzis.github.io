import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <section className="section-about">
                <div className="about" id="section-about">
                    <div className="about__box">

                        <figure className="about__picture">
                            <img className="about__picture-photo"
                                src="https://avatars1.githubusercontent.com/u/32135239?s=460&v=4" alt="dist/img/author.jpg" />
                            <a href="https://twitter.com/Lypzis" target="_blank" rel="noopener noreferrer" className="btn button-name">Victor V.
                            Piccoli</a>
                        </figure>
                        <div className="about__description">
                            <p className="text">
                                I'm an expert in front-end development helping in the creation of beautiful,
                                responsive and functional applications. I enjoy shaping simple and
                                effective designs along with a clean, descriptive and well commented code.
                            <br></br>
                                I have very diverse and libertarian ideals. I have a big appreciation for technology and innovation and I'm a
                                big fan of open source software. I also
                                love to make experiments and
                                learning from them. At my free time, I mostly enjoy playing games, laughing at memes and watching series.
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
        );
    }
}

export default About; 