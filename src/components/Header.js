import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="headerName">
        <h2 className="websiteName">Rustam Yuburov</h2>
        <h2 className="websiteVersion">V1</h2>
      </div>

      <ul className="nav-links">
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/portfolio">
          <li>PORTFOLIO</li>
        </Link>
        <Link to="/contact">
          <li>CONTACT</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
