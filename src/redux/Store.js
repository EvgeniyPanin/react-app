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
  
    _addPost = () => {
      const newPost = this._createNewPost(this._state.profilePage.newPostText);
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText ='';
      this._subscriber(this._state);
    }
  
    _changeNewPostText = (text) => {
      this._state.profilePage.newPostText = text;
      this._subscriber(this._state);
    }

    dispatch = (action) => {
      switch (action.type) {
        case 'ADD-POST':
          this._addPost();
          break;
        case 'CHANGE-NEW-POST-TEXT':
          this._changeNewPostText(action.newText);
          break;
      }
    }
  }

  export default Store;