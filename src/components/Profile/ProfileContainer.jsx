import React from "react";
import * as axios from 'axios';
import Profile from "./Profile";
import { connect } from "react-redux";
import {setProfile} from '../../redux/profile-reducer';
import Preloader from "../UI/Preloader/Preloader";



class ProfileContainer extends React.Component {
    render = () => {
      console.log(this.props)
      if (!this.props.user) {
        return <Preloader />
      }
      return <Profile user={this.props.user}/>
    }
    
    componentDidMount() {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/profile/2`
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

export default connect(mapStateToProps, {setProfile})(ProfileContainer)