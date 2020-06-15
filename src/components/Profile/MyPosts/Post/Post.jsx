import React from "react";
import style from "./Post.module.css";




const Post = (props) => {
    return (
        <div className={style.post}>
            <span className={style.avatar_contaner}>
                <img className={style.avatar} src="https://sun9-2.userapi.com/c853516/v853516347/59171/s_YR0_yc0h0.jpg" alt="Аватар"/>
            </span>
    <p className={style.contant}>{ props.contant }</p>
        </div>
    )
        

}

export default Post;