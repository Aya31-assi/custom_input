import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container mt-2 mb-2">
        <Link className="navbar-brand text-white  fw-semibold" to="/">START BOOTSTRAP</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="portfolio">PORTFOLIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;