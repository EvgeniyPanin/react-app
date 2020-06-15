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
    return (
      <div className={style.container}>
        <ul className={style.dialogs_container}>
          < Dialog name='Артем' id='1'/>
          < Dialog name='Василий' id='2'/>
          < Dialog name='Гоша' id='3'/>
          < Dialog name='Ваня' id='4'/>
          < Dialog name='Диана' id='5'/>
          < Dialog name='Света' id='6'/>
          < Dialog name='Петя' id='7'/>
          
        </ul>
        <section>
          <Message message='Привет' />
          <Message message='Как день прошел?' />
          <Message message='У меня тоже хорошо' />
          <Message message='Чем занимаешься завтра вечером?' />
          <Message message='Не знаю, есть предложения?' />
        </section>
      </div>
    );
}

export default Dialogs;