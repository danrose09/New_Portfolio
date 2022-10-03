import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCocktail } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__items">
        <div className="sidebar__github">
          <FontAwesomeIcon className="sidebar__github-icon" icon={faCocktail} />
        </div>
        <div className="sidebar__email">daniel.rosenberg333@gmail.com</div>
      </div>
    </div>
  );
};

export default Sidebar;
