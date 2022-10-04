import React from "react";

const Hero = () => {
  return (
    <section className="section-hero u-margin-bottom-section">
      <div className="hero">
        <div className="hero__image"></div>
        <h1 className="hero__heading-primary ">
          <span className="hero__heading-primary--main">DANIEL</span>
          <span className="hero__heading-primary--sub">
            {/* -an{" "}
            <span className="hero__heading-primary--sub hero__heading-primary--sub--pink">
              aspiring
            </span>{" "}
            full-stack developer */}
            front-end developer
          </span>
        </h1>

        <div className="btn-hero">
          <p className="btn-hero__text">
            START
            {/* START <i class="fa-solid fa-arrow-right btn-hero__arrow"></i> */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
