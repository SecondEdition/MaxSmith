import React from 'react';
import '../App.css';

function SiteNav() {
  return (
    <nav role="navigation" className="site-nav">
        <ul className="site-nav-list">
            {/* link to portfolio page */}
            <li className="site-nav-list-item">
                <a 
                    className="site-nav-link"
                    href="#Works">
                Works
                </a>
            </li>

            {/* link to info overlay */}
            <li className="site-nav-list-item">
                <a 
                    className="site-nav-link"
                    href="#About">
                About
                </a>
            </li>

            {/* link to contact form overlay */}
            <li className="site-nav-list-item">
                <a 
                    className="site-nav-link"    
                    href="#Contact">
                Contact
                </a>
            </li>
        </ul>
    </nav>
  );
}

export default SiteNav;