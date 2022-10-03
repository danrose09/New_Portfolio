import React from "react";

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero__image"></div>
        <h1 className="hero__heading-primary ">
          <span className="hero__heading-primary--main">Hi, I'm Daniel.</span>
          <span className="hero__heading-primary--sub">
            -an{" "}
            <span className="hero__heading-primary--sub hero__heading-primary--sub--pink">
              apsiring
            </span>{" "}
            full-stack developer
          </span>
        </h1>

        <div className="btn-hero">
          <span className="btn-hero__text">
            My Projects <i class="fa-thin fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
