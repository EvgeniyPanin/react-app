import { profileAPI } from "../api/api";

const ADD_POST = 'PROFILE/ADD-POST';
const SET_PROFILE = 'PROFILE/SET_PROFILE';
const SET_STATUS = 'PROFILE/SET_STATUS';

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
    profile: null,
    status: null
  };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
          const newPost = createNewPost(action.newPostText);
          return {
            ...state,
            posts: [...state.posts, newPost],
          }
        case SET_PROFILE:
          return {
            ...state,
            profile: action.profile,
          }
        case SET_STATUS:
          return {
            ...state,
            status: action.status,
          }
        default:
            return state;
    }
}

export function addPost(newPostText) {
    return {type: ADD_POST, newPostText};
}

export function setProfile(profile) {
    return {type: SET_PROFILE, profile};
}

export function setStatus(status) {
  return {type: SET_STATUS, status};
}

export const acceptProfile = (path) => {
  return (dispatch) => {
    profileAPI.getProfile(path).then((res) => {
      dispatch(setProfile(res.data));
    });
  };
};

export const getStatus = (userID) => {
  return (dispatch) => {
    profileAPI.getStatus(userID).then(res => {
      let status = res.data;
      if (status === null || status === '') {
        status = 'Нажмите, чтобы ввести статус'
      }
      dispatch(setStatus(status))
    })
  };
};

export const setUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.setStatus(status).then(res => {
      if (res.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
  };
};


export default profileReducer;