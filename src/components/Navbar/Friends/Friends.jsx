import React from "react";
import style from "./Friends.module.css";
import Friend from "./Friend/Friend";


const Friends = (props) => {
    return (
     <div className={style.friends}>
         <h3 className={style.header}>Мои друзья</h3>
         <div className={style.friends__container}>
            <Friend name='Артем' />
         </div>
     </div>
    );
}

export default Friends;