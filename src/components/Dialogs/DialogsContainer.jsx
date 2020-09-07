import { addMessage } from '../../redux/dialog-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import withAutoRedirect from '../../hok/withAutoRedirect';
import { compose } from 'redux';
import { selectDialogs, selectMessages } from '../../redux/dialog-selectors';

const mapStateToProps = (state) => {
  return {
    dialogs: selectDialogs(state),
    messages: selectMessages(state),
  }
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAutoRedirect
  )(Dialogs)