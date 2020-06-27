import style from "./Message.module.css";
import React from "react";


const Message = (props) => {
    return <p className={style.message}>{ props.message }</p>
  }

  export default Message;