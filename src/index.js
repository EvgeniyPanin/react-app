import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import state from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';

const renderApp = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={store.getState()} dispatch={store.dispatch}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

store.subscribe(renderApp);
renderApp(store.getState());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
