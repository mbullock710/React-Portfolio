import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
        <Link key={1} to="/">
            About Me
          </Link>
          </li>
          <li>
          <Link key={2} to="/portfolio">
            Portfolio
          </Link>
          </li>
          <li>
          <Link key={3} to="/contact">
            Contact
          </Link>
          </li>
          <li>
          <Link key={4} to="/resume">
            Resume
          </Link>
          </li>
        </ul>
    </nav>
  );
};

export default Navigation;

