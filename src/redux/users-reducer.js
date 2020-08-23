import { usersAPI } from "../api/UsersAPI";
import { followAPI } from "../api/FollowAPI";

const TOGGLE_FALLOWED = "TOGGLE_FALLOWED";
const SET_USERS = "SET_USERS";
const UPDATE_CURRENT_PAGE = "UPDATE_CURRENT_PAGE";
const TOGGLE_IS_FETCHED = "TOGGLE_IS_FETCHED";
const TOGGLE_FOLLOWING_FETCHING = "TOGGLE_FOLLOWING_FETCHING";

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 5000,
  currentPage: 1,
  isFetching: false,
  isFollowingFetching: [],
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
              followed: !user.followed,
            };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case UPDATE_CURRENT_PAGE:
      return { ...state, currentPage: action.newCurrentPage };
    case TOGGLE_IS_FETCHED:
      return { ...state, isFetching: action.state };
    case TOGGLE_FOLLOWING_FETCHING:
      if (action.state) {
        return {
          ...state,
          isFollowingFetching: [...state.isFollowingFetching, action.userID],
        };
      } else {
        return {
          ...state,
          isFollowingFetching: [
            ...state.isFollowingFetching.filter((id) => id !== action.userID),
          ],
        };
      }
    default:
      return state;
  }
};

export function toggleFallow(userID) {
  return {
    type: TOGGLE_FALLOWED,
    userID,
  };
}

export function setUsers(users) {
  return { type: SET_USERS, users };
}

export function updateCurrentPage(newCurrentPage) {
  return { type: UPDATE_CURRENT_PAGE, newCurrentPage };
}

export function toggleFetched(state) {
  return { type: TOGGLE_IS_FETCHED, state };
}

export function toggleFollowingFetching(state, userID) {
  return { type: TOGGLE_FOLLOWING_FETCHING, state, userID };
}

export const getUsers = (currenPage) => {
  return (dispatch) => {
    dispatch(toggleFetched(true));
    usersAPI.getUsers(currenPage).then((data) => {
      dispatch(toggleFetched(false));
      dispatch(setUsers(data.items));
    });
  };
};

export const unfollow = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowingFetching(true, userID));
    followAPI
      .deleteFollow(userID)
      .then((data) => {
        if (data.resultCode == 0) {
          dispatch(toggleFallow(userID));
        }
      })
      .finally(() => {
        dispatch(toggleFollowingFetching(false, userID));
      });
  };
};

export const follow = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowingFetching(true, userID));
    followAPI
      .postFollow(userID)
      .then((data) => {
        if (data.resultCode == 0) {
          dispatch(toggleFallow(userID));
        }
      })
      .finally(() => {
        dispatch(toggleFollowingFetching(false, userID));
      });
  };
};

export default usersReducer;
