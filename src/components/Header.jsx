import React from "react";
import style from "./Header.module.css";

const Header = () => {
    return (
    <header className={style.header}>
        <img className={style.logo} href='social network icon' src='https://openclipart.org/image/2400px/svg_to_png/216095/WWW-Icon-White-on-Black.png' />
    </header>)
}

export default Header;