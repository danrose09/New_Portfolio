import React, { useRef, useEffect, useState } from "react";
import Abilities from "./character-components/Abilities";
import Proficiencies from "./character-components/Proficiencies";
import Stats from "./character-components/Stats";

const Character = () => {
  // const myRef = useRef();
  // const [elementIsVis, setElementIsVis] = useState();
  // console.log("element is visible", elementIsVis);
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setElementIsVis(entry.isIntersecting);
  //   });
  //   observer.observe(myRef.current);
  // }, []);
  return (
    <section className="section-character u-margin-bottom-section">
      <div className="character">
        <h3 className="character__heading-main">Character Selection</h3>
        <div className="character__grid-1 u-margin-bottom-medium">
          <div className="character__stats">
            <h4 className={`character__heading-sub`}>STATS</h4>

            <Stats />
          </div>
          <div className="character__image-box">
            <img
              className="character__image"
              src="images/me-2-nes.png"
              alt="Site author"
            ></img>
            <p className="character__text">Daniel</p>
            <p className="character__text">Lvl 1</p>
            <p className="character__text">Front-End Dev</p>
          </div>
        </div>
        <div className="character__grid-2 u-margin-bottom-medium">
          <Abilities />
        </div>
        {/* <div className="character__grid-3">
          <Proficiencies />
        </div> */}
      </div>
    </section>
  );
};

export default Character;
