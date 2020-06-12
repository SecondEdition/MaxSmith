import React from 'react';
import SiteNav from './sitenav';
import '../App.css';

function Header() {
  return (
    <div className="headerbar">
        <div className="logo-menu">
        </div>
        <SiteNav />
    </div>
  );
}

export default Header;