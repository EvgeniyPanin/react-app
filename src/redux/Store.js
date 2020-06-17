class Store {
    constructor(state) {
      this._state = state;
      this._renderApp = null;
    }

    getState = () => this._state;
  
    subscribe = (observer) => {
      this._renderApp = observer;
    }
  
    _createNewPost = (text) => {
      const newPost = {
        contant: text, 
        avatar: "https://sun9-2.userapi.com/c853516/v853516347/59171/s_YR0_yc0h0.jpg",}
      return newPost;
    }
  
    addPost = () => {
      const newPost = this._createNewPost(this._state.profilePage.newPostText);
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText ='';
      this._renderApp(this._state);
    }
  
    changeNewPostText = (text) => {
      this._state.profilePage.newPostText = text;
      this._renderApp(this._state);
    }
  }

  export default Store;