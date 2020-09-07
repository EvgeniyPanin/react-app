import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {acceptProfile, getStatus, setUserStatus} from '../../redux/profile-reducer';
import Preloader from "../UI/Preloader/Preloader";
import { withRouter, Redirect } from "react-router-dom";
import withAutoRedirect from "../../hok/withAutoRedirect";
import { compose } from "redux";
import { selectUser, selectStatus } from "../../redux/profile-selectors";
import { selectId } from "../../redux/auth-selectors";



class ProfileContainer extends React.Component {
    render = () => {
      if (!this.props.user) return <Preloader />
      return <Profile user={ this.props.user }
                      status={ this.props.status }
                      setUserStatus={ this.props.setUserStatus }
                      myID={this.props.myID}
                      />
    }
    
    componentDidMount() {
      const userID = this.props.match.params.id || this.props.myID;
      this.props.acceptProfile(userID);
      this.props.getStatus(userID);
    }
}

const mapStateToProps = (state) => {
  return {
    user: selectUser(state),
    myID: selectId(state),
    status: selectStatus(state)
  }
}

export default compose(
  connect(mapStateToProps, { acceptProfile, getStatus, setUserStatus }),
  withAutoRedirect,
  withRouter
)(ProfileContainer)