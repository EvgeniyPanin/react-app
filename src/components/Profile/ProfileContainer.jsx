import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {acceptProfile} from '../../redux/profile-reducer';
import Preloader from "../UI/Preloader/Preloader";
import { withRouter, Redirect } from "react-router-dom";
import withAutoRedirect from "../../hok/withAutoRedirect";



class ProfileContainer extends React.Component {
    render = () => {
      if (!this.props.isAuth) return <Redirect to='/login' />
      if (!this.props.user) return <Preloader />
      return <Profile user={this.props.user}/>
    }
    
    componentDidMount() {
      let path = this.props.match.params.id;
      if (!path) path = '9265';
      this.props.acceptProfile(path);
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

const autoRedirectProfile = withAutoRedirect(withRouter(ProfileContainer))

export default connect(mapStateToProps, { acceptProfile })(autoRedirectProfile)