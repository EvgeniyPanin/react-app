import { changeText, addMessage } from '../../redux/dialog-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import withAutoRedirect from '../../hok/withAutoRedirect';

const mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogPage.newMessageText,
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
  }
}

const DialogsContainer = connect(mapStateToProps, 
  {addMessage, changeText})(withAutoRedirect(Dialogs));

export default DialogsContainer;