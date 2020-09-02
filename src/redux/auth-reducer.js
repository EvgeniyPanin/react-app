import {authAPI} from '../api/api'
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
  };

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
          return {
            ...state,
            ...action.payload,
          }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => {
  return {type: SET_USER_DATA, payload: {id, email, login, isAuth}}
}

export const getMe = () => {
  return (dispatch) => {
    authAPI.me().then(data => {
      if (data.resultCode === 0) {
        const {email, id, login} = data.data
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe = false) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
      if (data.resultCode === 0) {
        dispatch(getMe());
      } else {
        const error = data.messages.length === 0 
          ? 'Failed authorized, some error'
          : data.messages[0];
        dispatch(stopSubmit('login', {_error: error} ))
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;