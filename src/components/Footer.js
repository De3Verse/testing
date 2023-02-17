import React from "react";
import "../css/Footer.css";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-text poppin-text">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="">
            <div className="footer-links">
              <a href="">Link 1</a>
              <a href="">Link 2</a>
              <a href="">Link 3</a>
              <a href="">Link 4</a>
            </div>

            <div className="footer-social">
              {/* <a href="">
              <img src={facebook} />
            </a>
            <a href="">
              <img src={twitter} />
            </a>
            <a href="">
              <img src={instagram} />
            </a>
            <a href="">
              <img src={linkedin} />
            </a> */}
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <p>
            Copyright <b>@D3Verse2022</b>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
