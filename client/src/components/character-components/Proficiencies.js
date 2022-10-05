import React from "react";
import proficiencies from "../../data/proficiencies";

const Proficiencies = () => {
  const allProfs = proficiencies.map((prof) => {
    return <p className="proficiencies__name">{prof}</p>;
  });
  return <div className="proficiencies">{allProfs}</div>;
};

export default Proficiencies;
