import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-title-container">
        <h1 className="hero-primary">
          <span className="hero-title">Hi, I'm Daniel.</span>
          <span className="hero-sub">
            -an <span className="hero-sub hero-sub-pink">apsiring</span>{" "}
            full-stack developer
          </span>
        </h1>
        <div className="hero-button">My Projects</div>
      </div>
    </header>
  );
};

export default Hero;
