import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="section-footer p-3 bg-light text-center w-full col gap-1 text-dark">
      <h1 className="text-2xl">
        Made with <span className="text-error">♥</span> by{" "}
        <a href="https://sanjitsarkar.tk/">Sanjit Sarkar</a>
      </h1>
      <div className="row justify-center gap-1">
        <a
          href="https://github.com/sanjitsarkar/zencart"
          className="btn btn-round-md btn-dark"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sanjit-sarkar/"
          className="btn btn-round-md btn-dark"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/XanjitXarkar"
          className="btn btn-round-md btn-dark"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <h1 className="text-xl text-200">©Copyright 2022</h1>
    </footer>
  );
};

export default Footer;
