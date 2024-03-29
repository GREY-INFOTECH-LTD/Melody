import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
    <nav className="py-2 bg-transparent shadow-lg border-bottom">
    <div className="container-fluid d-flex flex-wrap my-3">
      <ul className="nav me-auto">
        <li className="nav-item">
          <a
            href="index.html"
            className="nav-link navbar-brand link-dark px-2 active mx-auto"
            aria-current="page"
            id="home"
          >
            <i className="fa-solid fa-music bi mx-2"></i>
            Melody
          </a>
        </li>
      </ul>
      <ul className="nav ms-auto">
      <li className="nav-item">
        <a href="https://youtube.com/" target={'_blank'} rel="noreferrer" className="nav-link link-dark px-2">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="https://twitter.com/greyinfotechltd" target={'_blank'} rel="noreferrer" className="nav-link link-dark px-2">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="nav-item">
        <a href="https://facebook.com/greyinfotechltd" target={'_blank'} rel="noreferrer" className="nav-link link-dark px-2">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
    );
};

export default Navbar;