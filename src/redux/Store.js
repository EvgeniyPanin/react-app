const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

class Store {
    constructor(state) {
      this._state = state;
      this._subscriber = null;
    }

    getState = () => this._state;
  
    subscribe = (observer) => {
      this._subscriber = observer;
    }
  
    _createNewPost = (text) => {
      const newPost = {
        contant: text, 
        avatar: "https://sun9-2.userapi.com/c853516/v853516347/59171/s_YR0_yc0h0.jpg",}
      return newPost;
    }

    _createNewMessage = (text) => {
      const newMessage = {
        message: text,
        id: this._state.dialogPage.messages.length + 1 + '',
      }
      return newMessage;
    }
  
    _addPost = () => {
      const newPost = this._createNewPost(this._state.profilePage.newPostText);
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText ='';
      this._subscriber(this._state);
    }

    _addMessage = () => {
      const newMessage = this._createNewMessage(this._state.dialogPage.newMessageText);
      this._state.dialogPage.messages.push(newMessage);
      this._state.dialogPage.newMessageText = '';
      this._subscriber(this._state);
    }
  
    _changeNewPostText = (text) => {
      this._state.profilePage.newPostText = text;
      this._subscriber(this._state);
    }

    _changeNewMessageText = (text) => {
      this._state.dialogPage.newMessageText = text;
      this._subscriber(this._state);
    }

    dispatch = (action) => {
      switch (action.type) {
        case ADD_POST:
          this._addPost();
          break;
        case ADD_MESSAGE:
          this._addMessage();
          break;
        case CHANGE_NEW_POST_TEXT:
          this._changeNewPostText(action.newText);
          break;
        case CHANGE_NEW_MESSAGE_TEXT:
          this._changeNewMessageText(action.newText);
          break;
      }
    }
  }

export function handlerChangePostTextActionCreater(text) {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newText: text
    }
}

export function handlerChangeMessageTextActionCreater(text) {
  return {
      type: CHANGE_NEW_MESSAGE_TEXT,
      newText: text
  }
}

export function addMessageActionCreater() {
  return {type: ADD_MESSAGE}
}

export function addPostActionCreater() {
  return {type: ADD_POST};
}

export default Store;