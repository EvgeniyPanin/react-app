import React from "react";

const Navbar = () => {
    return (
      <nav className="nav">
        <ul className="nav__links">
          <li className="navigation__item">
            <a href="#" className="nav__link">
              Profile
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="nav__link">
              Messages
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="nav__link">
              News
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="nav__link">
              Music
            </a>
          </li>
        </ul>
        <a href="#" className="nav__link">
          Settings
        </a>
      </nav>
    );
}

export default Navbar;