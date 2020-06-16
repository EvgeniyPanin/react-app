import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route, BrowserRouter} from "react-router-dom";


const App = (props) => {
  return (
      <div className="main">
        <Header />
        <Navbar state={props.state.navbar} />
        <div>
          <Route path='/profile' render={() => <Profile state={ props.state.profilePage } addPost={ props.addPost }/>} />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogPage} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
        </div>
      </div>
  );
};

export default App;
