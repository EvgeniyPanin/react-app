import { changeText, addMessage } from '../../redux/dialog-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import withAutoRedirect from '../../hok/withAutoRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogPage.newMessageText,
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
  }
}

export default compose(
    connect(mapStateToProps, {addMessage, changeText}),
    withAutoRedirect
  )(Dialogs)