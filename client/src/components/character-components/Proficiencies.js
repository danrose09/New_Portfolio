import React, { Fragment } from "react";
import proficiencies from "../../data/proficiencies";
import miscProficiencies from "../../data/misc-proficiencies";

const Proficiencies = () => {
  const allProfs = proficiencies.map((prof) => {
    return <p className="proficiencies__name">{`${prof}`}</p>;
  });
  const allMiscProfs = miscProficiencies.map((miscProf) => {
    return <p className="proficiencies__name">{`${miscProf}`}</p>;
  });
  return (
    <Fragment>
      <h4 className="character__heading-sub">Proficiencies</h4>
      <div className="proficiencies-container">
        <div className="proficiencies">
          <div className="profciencies__list">{allProfs}</div>
          <div className="profciencies__list">{allMiscProfs}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Proficiencies;
