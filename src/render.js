import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {addPost} from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export const renderApp = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

// export default renderApp;
