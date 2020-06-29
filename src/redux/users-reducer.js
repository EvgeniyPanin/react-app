const TOGGLE_FALLOWED = 'TOGGLE_FALLOWED';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [],
  };

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FALLOWED:
          return {
            ...state,
            users: state.users.map((user) => {
            if (action.userID === user.id) {
              return {
                ...user,
                fallowed: !user.fallowed,
              };
            }
            return user;
          }),
        } 
        case SET_USERS:
          return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export function toggleFallowedAC(userID) {
    return {
        type: TOGGLE_FALLOWED,
        userID,
    }
}

export function setUsersAC(users) {
    return {type: SET_USERS, users};
}


export default usersReducer;