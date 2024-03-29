import React from "react";

const Footer = () => {
  return (
    <footer className="d-none d-md-flex flex-wrap py-3 py-md-4 justify-content-between align-items-center border-top">
      <div className="col-md-5 d-flex align-items-center ms-2 ms-ms-5" id="footer-text">
        <i className="fa-solid fa-music mx-2"></i>
        <span>Melody</span>
        <span className="text-muted  style='font-size:5px'"> © 2021 - 2024 powered by <a href="https://www.greyinfotech.com.ng" target="_blank">Grey InfoTech Ltd.</a></span>
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
            href="https://twitter.com/greyinfotechltd"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="ms-3">
          <a
            className="text-muted"
            rel="noreferrer"
            href="https://facebook.com/greyinfotechltd"
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
