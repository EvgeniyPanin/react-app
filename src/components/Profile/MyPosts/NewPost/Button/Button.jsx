import React from "react";
import style from "./Button.module.css";




const Button = (props) => {
    return (
        <button onClick={props.hundlerSubmit} type='submit' className={style.button}>{ props.contant }</button>
    )
        

}

export default Button;