import { usersAPI, followAPI } from "../api/api";

const TOGGLE_FALLOWED = "USERS/TOGGLE_FALLOWED";
const SET_USERS = "USERS/SET_USERS";
const UPDATE_CURRENT_PAGE = "USERS/UPDATE_CURRENT_PAGE";
const TOGGLE_IS_FETCHED = "USERS/TOGGLE_IS_FETCHED";
const TOGGLE_FOLLOWING_FETCHING = "USERS/TOGGLE_FOLLOWING_FETCHING";
const SET_TOTAL_COUNT = "USERS/SET_TOTAL_COUNT";
const SET_PORTION_NUMBER = "USERS/SET_PORTION_NUMBER";

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: null,
  currentPage: 1,
  portionNumber: 1,
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
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalCount };
    case SET_PORTION_NUMBER:
      return { ...state, portionNumber: action.portionNumber };
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

export function setTotalCount(totalCount) {
  return { type: SET_TOTAL_COUNT, totalCount };
}

export function setPortionNumber(portionNumber) {
  return { type: SET_PORTION_NUMBER, portionNumber };
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

export const getUsers = (currentPage) => {
  return async (dispatch) => {
    dispatch(toggleFetched(true));

    const data = await usersAPI.getUsers(currentPage);

    dispatch(setTotalCount(data.totalCount));
    dispatch(toggleFetched(false));
    dispatch(setUsers(data.items));
  };
};

export const toggleSubscribe = (userID, state) => {
  const apiRequest = state ? 'postFollow' : 'deleteFollow';

  return async (dispatch) => {
    dispatch(toggleFollowingFetching(true, userID));

    const data = await followAPI[apiRequest](userID);

    const isResOK = data.resultCode == 0;
    if (isResOK) {
      dispatch(toggleFallow(userID));
    }
    dispatch(toggleFollowingFetching(false, userID));
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
