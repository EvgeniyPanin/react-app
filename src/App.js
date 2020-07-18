import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
  return (
      <div className="main">
        <Header />
        <Navbar />
        <div>
          <Route path='/profile' render={() => <ProfileContainer/>} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer store={ props.store }/>} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
        </div>
      </div>
  );
};

export default App;
