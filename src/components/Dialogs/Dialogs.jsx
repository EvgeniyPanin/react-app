import React from "react";
import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessageForm from "../Forms/NewMessageForm/NewMessageForm";

const Dialogs = (props) => {

  const dialogElements = props.dialogs
    .map( dialog => < Dialog name={ dialog.name } id={ dialog.id }/>);

  const messageElements = props.messages
    .map( m =>  <Message message={m.message} />);


  const onSubmit = (formData) => {
    props.addMessage(formData.newMessage);
  }

    return (
      <div className={style.container}>
        <ul className={style.dialogs_container}>{ dialogElements }</ul>
        <section>{ messageElements }</section>
        <section className={style.new_message}>
          <NewMessageForm onSubmit={onSubmit}/>
        </section>
      </div>
    );
}

export default Dialogs;