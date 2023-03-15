import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
  return (
    <>
      <nav>
        <div className="back">
          <Link to="/">
            <i className="fa-solid fa-chevron-left" />
            {' '}
          </Link>
        </div>
        <h2 className="pageTitle">Vibranium World Revenue</h2>
        <div className="icons">
          <i className="fa-solid fa-microphone" />
          <i className="fa-solid fa-gear" />
        </div>
      </nav>
      <header className="header" />
    </>

  );
}

export default Nav;
