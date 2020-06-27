import style from "./Dialog.module.css";
import React from "react";
import { NavLink } from "react-router-dom";


const Dialog = (props) => {
    return (
      <li className={style.dialog}>
        <NavLink to={`/dialogs/${props.id}`}>{ props.name }</NavLink>
      </li>
    );
  }

  export default Dialog;