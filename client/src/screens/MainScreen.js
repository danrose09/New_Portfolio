import React, { Fragment } from "react";
import Hero from "../components/Hero";
import Character from "../components/Character";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MainScreen = () => {
  return (
    <Fragment>
      <Hero />
      <Character />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default MainScreen;
