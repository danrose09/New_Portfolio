import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="section-hero u-margin-bottom-section">
      <div className="hero">
        <h1 className="hero__heading-primary u-margin-bottom-medium">
          <span className="hero__heading-primary--main-1">DANIEL</span>
          <span className="hero__heading-primary--main-2">ROSENBERG</span>
          <span className="hero__heading-primary--sub">
            FRONT-END DEVELOPER
          </span>
        </h1>
        <Navbar />
        <p className="hero__copyright"> &#169;Copyright 2022 DANROSE</p>
      </div>
    </section>
  );
};

export default Hero;
