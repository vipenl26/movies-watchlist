import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footerHolder">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
          <ul class="social-icon">
            <li className="social-icon__item">
              <a className="social-icon__link" href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li className="social-icon__item">
              <a className="social-icon__link" href="#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li className="social-icon__item">
              <a className="social-icon__link" href="#">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li className="social-icon__item">
              <a className="social-icon__link" href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
          <ul className="menu">
            <li className="menu__item">
              <a className="menu__link" href="#">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                About
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Services
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Team
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <p>&copy;2021 vipenl26 | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
