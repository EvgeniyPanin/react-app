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
    <BrowserRouter>
      <div className="main">
        <Header />
        <Navbar />
        <div>
          <Route path='/profile' render={() => <Profile posts={ props.data.posts } />} />
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.data.dialogs} messages={props.data.messages} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
