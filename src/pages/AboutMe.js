import React from 'react';
import {Link} from "react-router-dom";

const AboutMe = () => {
    return (
        <div>
            <h1>About Me</h1>
            <h2>Zach Schleger</h2>
            <p>I am currently a 4th year student at Penn State Behrend majoring in Digital Media Arts and Technology</p>

            <Link to="https://github.com/ZSchleger">
                <button>GitHub</button>
            </Link>
        </div>
    );
}

export default AboutMe;