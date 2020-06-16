import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const data = {
  posts: [
    {
      contant: "Hello? How are you?",
      avatar:
        "https://sun9-2.userapi.com/c853516/v853516347/59171/s_YR0_yc0h0.jpg",
    },
    {
      contant: "I use props! It's cool!",
      avatar:
        "https://sun9-2.userapi.com/c853516/v853516347/59171/s_YR0_yc0h0.jpg",
    },
    {
      contant: "Today is June 10th, perfect day to lern the React, Redux",
      avatar:
        "https://sun9-2.userapi.com/c853516/v853516347/59171/s_YR0_yc0h0.jpg",
    },
  ],
  dialogs: [
    { 
      name: "Артем", 
      id: "1" },
    { 
      name: "Василий", 
      id: "2" },
    { 
      name: "Гоша", 
      id: "3" },
    { 
      name: "Ваня", 
      id: "4" },
    { 
      name: "Диана", 
      id: "5" },
    { 
      name: "Света", 
      id: "6" },
    { 
      name: "Петя", 
      id: "7" },
  ],
  messages: [
    {
      message: 'Привет', 
      id: '1'},
    {
      message: 'Как день прошел?', 
      id: '2'},
    {
      message: 'Хорошо', 
      id: '3'},
    {
      message: 'У меня тоже хорошо', 
      id: '4'},
    {
      message: 'Чем занимаешься завтра вечером?', 
      id: '5'},
    {
      message: 'Не знаю, есть предложения?', 
      id: '6'},
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <App data={ data }/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
