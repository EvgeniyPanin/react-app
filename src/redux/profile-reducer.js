const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const createNewPost = (text) => {
    const newPost = {
      contant: text, 
      avatar: "https://sun9-2.userapi.com/c853516/v853516347/59171/s_YR0_yc0h0.jpg",}
    return newPost;
  }

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = createNewPost(state.newPostText);
            state.posts.push(newPost);
            state.newPostText ='';
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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