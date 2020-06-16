import React from "react";
import style from "./Friend.module.css";


const Friend = (props) => {
    return (
      <div className={style.friend}>
        <span className={style.avatar_container}>
            <img className={style.avatar} src={ props.src } alt={ props.name }/>
        </span>
        <h4 className={style.friend__name}>{props.name}</h4>
      </div>
    );
}

export default Friend;