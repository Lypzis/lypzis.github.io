import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
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
        );
    }
}

export default About; 