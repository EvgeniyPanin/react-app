import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";


const App = (props) => {
  return (
      <div className="main">
        <Header />
        <Navbar state={props.state.navbar} />
        <div>
          <Route path='/profile' render={() => <Profile store={ props.store }/>} />
          <Route path='/dialogs' render={() => <DialogsContainer store={ props.store }/>} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
        </div>
      </div>
  );
};

export default App;
