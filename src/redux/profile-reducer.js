const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const createNewPost = (text) => {
    const newPost = {
      contant: text, 
      avatar: "https://sun9-2.userapi.com/c853516/v853516347/59171/s_YR0_yc0h0.jpg",}
    return newPost;
  }

const initialState = {
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
    newPostText: 'Everything fine!',
  };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
          const newPost = createNewPost(state.newPostText);
          return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
          }
        case CHANGE_NEW_POST_TEXT:
          return {
            ...state,
            newPostText: action.newText,
          }
        default:
            return state;
    }
}

export function handlerChangePostTextActionCreater(text) {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newText: text
    }
}

export function addPostActionCreater() {
    return {type: ADD_POST};
}


export default profileReducer;