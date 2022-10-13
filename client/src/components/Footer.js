import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const closeTab = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
  };
  return (
    <section className="section-footer">
      <div className="footer">
        <div className="projects__heading-primary footer__heading-primary">
          <span className="hero__heading-primary--main-1">Game</span>
          <span className="hero__heading-primary--main-2">Over</span>
        </div>
        <div className="navbar footer__navbar">
          <ul className="navbar__nav-list">
            <li
              onClick={scrollToTop}
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
        </div>
      </div>
    </section>
  );
};

export default Footer;
