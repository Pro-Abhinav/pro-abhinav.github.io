import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import About from '../About/About';
import Contact from '../Contact/Contact';
import Blogs from '../Blogs/Blogs';
import Projects from '../Projects/Projects';

import './styles.css';

const Home = () => {
    return (
        <div className="container">
            <nav>
                <div id="title">Abhinav Tripathi</div>
                    <ul className="navButtons">
                        <li className="navButton"><a href="#">Projects</a></li>
                        <li className="navButton"><a href="#">About</a></li>
                        <li className="navButton"><a href="#">Contact</a></li>
                    </ul>
            </nav>
            <div id="dpImage">
                <img src="https://avatars.githubusercontent.com/u/54502059?v=4" alt="dp_image"></img>
            </div>

            <div id="socialIcons">
                <ul>
                    <li><FontAwesomeIcon icon={faGithub} /></li>
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                </ul>
            </div>
            <footer>
                <p>Made with ❤ by Abhinav Tripathi</p>
            </footer>
        </div>
    )
}

export default Home
