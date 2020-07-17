const TOGGLE_FALLOWED = 'TOGGLE_FALLOWED';
const SET_USERS = 'SET_USERS';
const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';
const TOGGLE_IS_FETCHED = 'TOGGLE_IS_FETCHED';

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 250,
    currentPage: 1,
    isFetching: false,
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
          return {...state, users: [...action.users]}
        case UPDATE_CURRENT_PAGE:
          return {...state, currentPage: action.newCurrentPage}
        case TOGGLE_IS_FETCHED:
          console.log(state)
          return {...state, isFetching: action.state}
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

export function updateCurrentPageAC(newCurrentPage) {
  return {type: UPDATE_CURRENT_PAGE, newCurrentPage}
}

export function toggleFetchedAC(state) {
  return {type: TOGGLE_IS_FETCHED, state}
}


export default usersReducer;