import React from "react";
import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

  const dialogElements = props.dialogs
    .map( dialog => < Dialog name={ dialog.name } id={ dialog.id }/>);

  const messageElements = props.messages
    .map( m =>  <Message message={m.message} />);

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
        <ul className={style.dialogs_container}>{ dialogElements }</ul>
        <section>{ messageElements }</section>
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