import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const closeTab = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
  };
  return (
    <section className="section-footer">
      <div className="footer">
        <h3 className="projects__heading-primary footer__heading-primary">
          <span className="hero__heading-primary--main-1">Game</span>
          <span className="hero__heading-primary--main-2">Over</span>
        </h3>
        <div className="navbar">
          <nav className="navbar__nav">
            <ul className="navbar__nav-list">
              <li
                onClick={navigate("/")}
                className="navbar__nav-item navbar__nav-item--start"
              >
                <i class="fa-solid fa-jet-fighter navbar__nav-item--jet"></i>
                RESTART
              </li>
              <li onClick={closeTab} className="navbar__nav-item">
                <i class="fa-solid fa-jet-fighter navbar__nav-item--jet"></i>
                EXIT GAME
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Footer;
