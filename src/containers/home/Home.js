import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <header className="header">

                <div className="header__text-box">
                    <div className="heading-primary">
                        <h1 className="heading-primary--main">
                            Hello, I'm Victor
                </h1>
                        <h2 className="heading-primary--sub">
                            Developer &amp; Designer
                </h2>
                    </div>

                    <a href="#section-about" className="button button-animated button__section">Know More</a>
                </div>
            </header>
        );
    }
}

export default Home; 