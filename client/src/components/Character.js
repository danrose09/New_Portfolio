import React, { useRef, useEffect, useState, useMemo } from "react";
import Abilities from "./character-components/Abilities";
import Stats from "./character-components/Stats";

const Character = () => {
  const characterDivRef = useRef(null);
  const [elementIsVis, setElementIsVis] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setElementIsVis(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = characterDivRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [characterDivRef, options]);

  return (
    <section className="section-character u-margin-bottom-section">
      <div className="character" ref={characterDivRef}>
        <h1>{!elementIsVis ? "Not Visible" : "Visible"}</h1>
        <h3 className="character__heading-main">Character Selection</h3>
        <div className="character__grid-1 u-margin-bottom-medium">
          <div className="character__stats">
            <h4 className={`character__heading-sub`}>STATS</h4>

            <Stats elementIsVis={elementIsVis} />
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
