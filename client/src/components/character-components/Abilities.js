import React from "react";
import abilities from "../../data/abilities";

const Abilities = () => {
  const abilities1to3 = abilities.map((ability, index) => {
    if (index <= 2) {
      return (
        <div className="abilities__box">
          <img
            className="abilities__image"
            src={ability.img}
            alt="ability"
          ></img>
          <p className="abilities__name">{ability.name}</p>
        </div>
      );
    }
    return null;
  });

  return (
    <div className="abilities u-padding-section-x-md">
      <div className="row-abilities u-margin-bottom-medium">
        {abilities1to3}
      </div>
    </div>
  );
};

export default Abilities;
