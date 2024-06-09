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
                            <a href="https://github.com/Lypzis" target="_blank" rel="noopener noreferrer" className="btn button-name">Victor V.
                            Piccoli</a>
                        </figure>
                        <div className="about__description">
                            <p className="text">
                                I am an expert in software development with a strong focus on creating beautiful, responsive, and functional applications. My passion lies in crafting simple and effective designs, paired with clean, descriptive, and well-commented code.
                            <br></br>
                                I hold strong libertarian ideals and have a deep appreciation for technology and innovation. As a big supporter of open-source software, I am constantly experimenting and learning from my projects. In my free time, I enjoy playing games, exploring new memes, and watching series.
                            </p>

                            <br></br>
                            <br></br>
                            <div className="about__description-quote-box">
                                <p className="text quote">
                                    "If you know me based on who I was a year ago, you don't know me anymore. My evolution is constant. Allow me to introduce myself anew."
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