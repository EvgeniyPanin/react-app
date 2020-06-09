import React from "react";
import style from "./Navbar.module.css";
console.log(style);

const Navbar = () => {
    return (
      <nav className={style.nav}>
        <ul className={style.links}>
          <li>
            <a href="#" className={style.link}>
              Profile
            </a>
          </li>
          <li>
            <a href="#" className={style.link}>
              Messages
            </a>
          </li>
          <li>
            <a href="#" className={style.link}>
              News
            </a>
          </li>
          <li>
            <a href="#" className={style.link}>
              Music
            </a>
          </li>
        </ul>
        <a href="#" className={style.link}>
          Settings
        </a>
      </nav>
    );
}

export default Navbar;