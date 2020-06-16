import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

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

    return (
      <div className={style.container}>
        <ul className={style.dialogs_container}>
          { dialogElements }
        </ul>
        <section>
          { messageElements }
        </section>
      </div>
    );
}

export default Dialogs;