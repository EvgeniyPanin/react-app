import React from "react";
import "./App.css";
import Header from "./Header";
import Tehnologies from "./Tehnologies";
import Footer from "./Footer";


const App = () => {
  return (
    <div className="main">
      <header className="header">
        <img className='header__logo' href='social network icon' src='https://openclipart.org/image/2400px/svg_to_png/216095/WWW-Icon-White-on-Black.png' />
      </header>
      <nav className="nav">
        <ul className="navigation">
          <li className="navigation__item">
            <a className="nav__link">Profile</a>
          </li>
          <li className="navigation__item">
            <a className="nav__link"></a>Messages
          </li>
          <li className="navigation__item">
            <a className="nav__link">News</a>
          </li>
          <li className="navigation__item">
            <a className="nav__link">Music</a>
          </li>
        </ul>
        <a className="nav__link">Settings</a>
      </nav>
      <div className='contant-container'></div>
    </div>
  );
};

export default App;
