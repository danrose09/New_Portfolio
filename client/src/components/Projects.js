import React from "react";
import Ecommerce from "./projects-components/Ecommerce";
import HangmanDictionary from "./projects-components/HangmanDictionary";
import Speed from "./projects-components/Speed";

const Projects = () => {
  return (
    <section className="section-projects u-margin-bottom-section u-padding-section-x-lg">
      <HangmanDictionary />
      <Ecommerce />
      <Speed />
    </section>
  );
};

export default Projects;
