import { addMessage } from '../../redux/dialog-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import withAutoRedirect from '../../hok/withAutoRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
  }
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAutoRedirect
  )(Dialogs)