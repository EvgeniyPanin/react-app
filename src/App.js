import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = (props) => {
  return (
      <div className="main">
        <HeaderContainer />
        <Navbar />
        <div>
          <Route path='/profile/:id?' render={() => <ProfileContainer/>} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer store={ props.store }/>} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
  );
};

export default App;
