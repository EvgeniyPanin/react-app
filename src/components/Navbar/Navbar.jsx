import React from "react";
import FriendsContainer from './Friends/FriendsContainer'
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";


const Navbar = (props) => {
    return (
      <nav className={style.nav}>
        <ul className={style.links}>
          <li className={style.link}>
            <NavLink to="/profile" activeClassName={style.active}>Мой профиль</NavLink>
          </li>
          <li className={style.link}>
            <NavLink to="/dialogs" activeClassName={style.active}>Сообщения</NavLink>
          </li>
          <li className={style.link}>
            <NavLink to="/news" activeClassName={style.active}>Новости</NavLink>
          </li>
          <li className={style.link}>
            <NavLink to="/music" activeClassName={style.active}>Музыка</NavLink>
          </li>
          <li className={style.link}>
            <NavLink to="/settings" activeClassName={style.active}>Настройки</NavLink>
          </li>
        </ul>
        <FriendsContainer />
      </nav>
    );
}

export default Navbar;