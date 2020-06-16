import React from "react";
import style from "./Friends.module.css";
import Friend from "./Friend/Friend";


const Friends = (props) => {
    const friendsElements = props.state.slice(0, 6)
        .map(friend => <Friend name={friend.name} src={friend.avatar}/>);


    return (
     <div className={style.friends}>
         <h3 className={style.header}>Мои друзья</h3>
         <div className={style.friends__container}>
            { friendsElements }
         </div>
     </div>
    );
}

export default Friends;