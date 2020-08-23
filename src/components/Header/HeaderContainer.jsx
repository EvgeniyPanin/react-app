import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import {authAPI} from '../../api/AuthAPI'
import Header from "./Header";
import { setAuthUserData } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header { ...this.props }/>;
  }
  componentDidMount() {
    authAPI
      .getAuth()
      .then((data) => {
        if (data.resultCode === 0) {
          const {email, id, login} = data.data
          this.props.setAuthUserData(id, email, login);
        }
        
      });
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
