import { changeText, addMessage } from '../../redux/dialog-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogPage.newMessageText,
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    isAuth: state.auth.isAuth
  }
}

const DialogsContainer = connect(mapStateToProps, 
  {addMessage, changeText})(Dialogs);

export default DialogsContainer;