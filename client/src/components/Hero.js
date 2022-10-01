import React from "react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero">
        <h1 className="hero__heading-primary">
          <span className="hero__heading-primary--main">Hi, I'm Daniel.</span>
          <span className="hero_heading-primary--sub">
            -an{" "}
            <span className="hero__heading-sub hero__heading-sub--pink">
              apsiring
            </span>{" "}
            full-stack developer
          </span>
        </h1>
        <div className="btn">My Projects</div>
      </div>
    </section>
  );
};

export default Hero;
