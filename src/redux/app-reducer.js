import { getMe } from "./auth-reducer";

const SET_INITIALIZE = "APP/SET_INITIALIZE";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZE:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const setInitialize = () => {
  return { type: SET_INITIALIZE };
};

export const initialization = () => {
  return (dispatch) => {
    const mePromise = dispatch(getMe());

    Promise.all([mePromise]).then(() => {
      dispatch(setInitialize())
    })
  };
};

export default appReducer;
