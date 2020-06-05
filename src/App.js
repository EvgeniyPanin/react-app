import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Tehnologies />
    </div>
  );
};

const Tehnologies = () => {
  return (
    <div className="App">
      <ul>
        <li>React</li>
        <li>Vue</li>
        <li>NodeJS</li>
        <li>Webpack</li>
      </ul>
    </div>
  );
};

const Header =() => {
  return (
    <div>
      <h1>Хочу изучить эти технологии :)</h1>
    </div>
  )
}

export default App;
