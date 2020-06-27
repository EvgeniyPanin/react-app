import React from "react";
import { handlerChangeMessageTextActionCreater, addMessageActionCreater } from '../../redux/dialog-reducer';
import Dialogs from "./Dialogs";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const DialogsContainer = (props) => {
  const state = props.store.getState();

  const dialogElements = state.dialogPage.dialogs
    .map( dialog => < Dialog name={ dialog.name } id={ dialog.id }/>);

  const messageElements = state.dialogPage.messages
    .map( m =>  <Message message={m.message} />);

  function changeText(text) {
    props.store.dispatch(handlerChangeMessageTextActionCreater(text));
  }

  const addMessage = () => {
    props.store.dispatch(addMessageActionCreater());
  }

    return <Dialogs addMessage={addMessage} 
                    changeText={changeText} 
                    newMessageText={ state.dialogPage.newMessageText }
                    dialogs={ dialogElements }
                    messages={ messageElements } />
}

export default DialogsContainer;