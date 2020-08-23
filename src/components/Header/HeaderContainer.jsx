import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getMe } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header { ...this.props }/>;
  }
  componentDidMount() {
    this.props.getMe();
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { getMe })(HeaderContainer);
