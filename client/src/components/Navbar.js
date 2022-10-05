import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar__nav">
        <ul className="navbar__nav-list">
          <li className="navbar__nav-item navbar__nav-item--start">
            <i class="fa-solid fa-jet-fighter navbar__nav-item--jet"></i>
            START
          </li>
          <li className="navbar__nav-item">
            <i class="fa-solid fa-jet-fighter navbar__nav-item--jet"></i>
            Projects
          </li>
          <li className="navbar__nav-item">
            <i class="fa-solid fa-jet-fighter navbar__nav-item--jet"></i>Contact
          </li>
          <li className="navbar__nav-item">
            <i class="fa-solid fa-jet-fighter navbar__nav-item--jet"></i>GitHub
          </li>
          <li className="navbar__nav-item">
            <i class="fa-solid fa-jet-fighter navbar__nav-item--jet"></i>Resume
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
