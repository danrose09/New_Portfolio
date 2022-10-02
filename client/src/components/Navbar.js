import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar__nav">
        <ul className="navbar__nav-list">
          <li className="navbar__nav-item">Projects</li>
          <li className="navbar__nav-item">Contact</li>
          <li className="navbar__nav-item">About</li>
          <li className="navbar__nav-item">Resume</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
