import { handlerChangeMessageTextActionCreater, addMessageActionCreater } from '../../redux/dialog-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogPage.newMessageText,
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      const action = addMessageActionCreater()
      dispatch(action);
    },
    changeText: (text) => {
      const action = handlerChangeMessageTextActionCreater(text)
      dispatch(action);
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;