import React from 'react';

import Toolbar from '../components/toolbar';

const layout = props => (
    <React.Fragment>
        <header className="layout__header">
            <Toolbar
                logo={props.logo}
                toolbarLinks={props.navLinks}
            />
        </header>


        <main className="layout__main">{props.children}</main>

        <footer className="layout__footer">
            <p>&emsp;</p>
            © 2019 by Lypzis. All rights reserved.
                    <p className="layout__footer-badge" title="The W3C CSS Validation Service">
                <a target="_blank" rel="noopener noreferrer"
                    href="http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Flypzis.github.io%2F&amp;profile=css3svg&amp;usermedium=all&amp;warning=0&amp;vextwarning=">
                    <img src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" />
                </a>
            </p>
        </footer>
    </React.Fragment>
);

export default layout;