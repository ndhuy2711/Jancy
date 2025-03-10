import Tiktok from "../images/icons/tiktok0.svg";
import Fb from "../images/icons/facebook0.svg";
import LinkedIn from "../images/icons/linkedin0.svg";
import React from "react";
export default function Header() {
  return (
    <header className="sub-header">
      <section className="wrapper container">
        <ul className="menu">
          <li className="menu-item">
            <a href="tel:0909977939" target="_blank" className="sub-menu-link ">
              Hotline: (+84) 909 977 939
            </a>
          </li>
          <li className="menu-item">
            <a
              href="mailto:nguyen.jancy@gmail.com"
              target="_blank"
              className="sub-menu-link "
            >
              Email: nguyen.jancy@gmail.com
            </a>
          </li>

          <li className="menu-item social-icon">
            <ul className="social-icon-list">
              <li className="social-icon-item">
                <a href="https://www.tiktok.com/@hellojancyyy" target="_blank">
                  <img src={Tiktok} alt="tiktok" />
                </a>
              </li>
              <li className="social-icon-item">
                <a href="https://www.facebook.com/JANCYNGUYEN" target="_blank">
                  <img src={Fb} alt="facebook" />
                </a>
              </li>
              <li className="social-icon-item">
                <a
                  href="https://www.linkedin.com/in/jancynguyen"
                  target="_blank"
                >
                  <img src={LinkedIn} alt="linkedin" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </header>
  );
}
