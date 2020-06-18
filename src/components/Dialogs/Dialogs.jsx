import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { handlerChangeMessageTextActionCreater, addMessageActionCreater } from '../../redux/dialog-reducer';

const Dialog = (props) => {
  return (
    <li className={style.dialog}>
      <NavLink to={`/dialogs/${props.id}`}>{ props.name }</NavLink>
    </li>
  );
}

const Message = (props) => {
  return (
  <p className={style.message}>{ props.message }</p>
  )
}

const Dialogs = (props) => {
  const dialogElements = props.state.dialogs
    .map( dialog => < Dialog name={ dialog.name } id={ dialog.id }/>);

  const messageElements = props.state.messages
    .map( m =>  <Message message={m.message} />);

  function handlerChangeText(evt) {
    const text = evt.target.value;
    props.dispatch(handlerChangeMessageTextActionCreater(text));
  }

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    props.dispatch(addMessageActionCreater());
  }

    return (
      <div className={style.container}>
        <ul className={style.dialogs_container}>{dialogElements}</ul>
        <section>{messageElements}</section>
        <section className={style.new_message}>
          <form className={style.form}>
            <textarea
              onChange={ handlerChangeText }
              value={ props.state.newMessageText }
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