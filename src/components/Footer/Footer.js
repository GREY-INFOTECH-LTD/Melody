import React from "react";

const Footer = () => {
  return (
    <footer className="d-none d-md-flex flex-wrap py-3 py-md-4 justify-content-between align-items-center border-top">
      <div className="col-md-4 d-flex align-items-center ms-2 ms-ms-4" id="footer-text">
        <i className="fas fa-headphones-simple mx-2"></i>
        <span className="rainbow-text">Mel</span><span>ody</span>
        <span className="text-muted ms-1"> © 2021 - 2023 powered by</span>
        <a href="https://www.greyinfotech.com.ng" target="_blank"><span className="rainbow-text ms-1">Grey</span> Info<span className="rainbow-text">Tech</span>Ltd.</a>
      </div>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-2 me-md-4">
        <li className="ms-3">
          <a
            className="text-muted"
            rel="noreferrer"
            href="https://youtube.com/"
            target="_blank"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </li>
        <li className="ms-3">
          <a
            className="text-muted"
            rel="noreferrer"
            href="https://twitter.com/"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="ms-3">
          <a
            className="text-muted"
            rel="noreferrer"
            href="https://facebook.com/"
            target="_blank"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
