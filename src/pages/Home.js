import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Zach Schleger</h1>
            <p>I am currently a 4th year student at Penn State Behrend majoring in Digital Media Arts and Technology</p>


            <nav>
                <Link to="/Resume">
                    <button>Resume</button>
                </Link>
                <Link to="/Projects">
                    <button>Projects</button>
                </Link>
                <Link to="/AboutMe">
                    <button>About Me</button>
                </Link>
            </nav>
        </div>
    );
}

export default Home;
