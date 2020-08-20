import React from "react";
import * as axios from 'axios';
import Profile from "./Profile";
import { connect } from "react-redux";
import {setProfile} from '../../redux/profile-reducer';
import Preloader from "../UI/Preloader/Preloader";
import { withRouter } from "react-router-dom";



class ProfileContainer extends React.Component {
    render = () => {
      if (!this.props.user) return <Preloader />
      return <Profile user={this.props.user}/>
    }
    
    componentDidMount() {
      let path = this.props.match.params.id;
      if (!path) path = '9265';
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/profile/${path}`
        )
        .then((response) => {
          this.props.setProfile(response.data);
        });
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.profilePage.profile
  }
}

export default connect(mapStateToProps, {setProfile})(withRouter(ProfileContainer))