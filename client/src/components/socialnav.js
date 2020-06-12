import React from 'react';

import linkdnlogo from '../assets/LI-bnw-simple.png';
import instaglogo from '../assets/glyph-logo_May2016_white.png';
import githublogo from '../assets/GitHub-Mark-Light-32px.png';
import '../App.css';

function SocialNav() {
  return (
    <nav role="navigation" className="social-nav">
        <ul className="social-nav-list">
            {/* external link to Github page */}
            <li className="social-nav-item">
                <a 
                    href="https://github.com/SecondEdition"
                    target="_blank"
                    rel="noopener noreferrer"                
                >
                    <img className="social-logo" src={githublogo} alt="Github Icon" />
                </a>
            </li>

            {/* external link to LinkedIn page */}
            <li className="social-nav-item">
                <a 
                        href="https://www.linkedin.com/in/max-estep-smith"
                        target="_blank"
                        rel="noopener noreferrer"                
                    >
                        <img className="social-logo" src={linkdnlogo} alt="LinkedIn Icon" />
                </a>
            </li>

            {/* external link to Instagram page */}
            <li className="social-nav-item">
                <a 
                    href="https://www.instagram.com/estepsmites/"
                    target="_blank"
                    rel="noopener noreferrer"                
                >
                    <img className="social-logo" src={instaglogo} alt="Instagram Icon" />
                </a>
            </li>
        </ul>
    </nav>
  );
}

export default SocialNav;