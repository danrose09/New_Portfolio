import React from "react";

const Character = () => {
  return (
    <section className="section-character u-padding-x-section">
      <div className="character">
        <h3 className="character__heading-main">Character Selection</h3>
        <div className="character__grid-1">
          <div className="character__stats">Stats</div>
          <div className="character__image-box">
            <img className="character__image"></img>
          </div>
          <div className="character__proficiencies">Proficiencies</div>
        </div>
        <div className="character__grid-2"></div>
      </div>
    </section>
  );
};

export default Character;
