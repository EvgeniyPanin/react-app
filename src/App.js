import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { compose } from "redux";
import { connect } from "react-redux";
import { initialization } from './redux/app-reducer';
import { withSuspense } from "./hok/withSuspense";

const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));



class App extends React.Component {
  render() {
    return this.props.initialized && (
      <div className="main">
        <HeaderContainer />
        <Navbar />
        <div>
          <Route path='/profile/:id?' render={() => <ProfileContainer/>} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/login' render={withSuspense(LoginContainer)} />
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.initialization();
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initialization})
)(App);
