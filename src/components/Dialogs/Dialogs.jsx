import React from "react";
import style from "./Dialogs.module.css";

const Dialogs = (props) => {
  
  function handlerChangeText(evt) {
    const text = evt.target.value;
    props.changeText(text);
  }

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    props.addMessage();
  }

    return (
      <div className={style.container}>
        <ul className={style.dialogs_container}>{ props.dialogs }</ul>
        <section>{ props.messages }</section>
        <section className={style.new_message}>
          <form className={style.form}>
            <textarea
              onChange={ handlerChangeText }
              value={ props.newMessageText }
              name="new-message"
              id="new-message"
            ></textarea>
            <button onClick={ handlerSubmit }>Отправить</button>
          </form>
        </section>
      </div>
    );
}

export default Dialogs;