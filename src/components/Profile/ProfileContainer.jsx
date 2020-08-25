import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {acceptProfile} from '../../redux/profile-reducer';
import Preloader from "../UI/Preloader/Preloader";
import { withRouter, Redirect } from "react-router-dom";
import withAutoRedirect from "../../hok/withAutoRedirect";
import { compose } from "redux";



class ProfileContainer extends React.Component {
    render = () => {
      if (!this.props.user) return <Preloader />
      return <Profile user={this.props.user}/>
    }
    
    componentDidMount() {
      const path = this.props.match.params.id || this.props.myID;
      this.props.acceptProfile(path);
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.profilePage.profile,
    myID: state.auth.id
  }
}

export default compose(
  connect(mapStateToProps, { acceptProfile }),
  withAutoRedirect,
  withRouter
)(ProfileContainer)