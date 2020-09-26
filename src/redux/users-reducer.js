import { userAPI } from "../api/api";

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = " TOGGLE_FOLLOWING_IN_PROGRESS";

const initialState = {
  users: [],
  pageSize: 100,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUserCount: action.totalUserCount,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: true } : user
        ),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: false } : user
        ),
      };

    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const setUsers = (users) => ({ type: SET_USERS, users });

export const followSuccess = (userId) => ({ type: FOLLOW, userId });

export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUserCount = (totalUserCount) => ({
  type: SET_TOTAL_USER_COUNT,
  totalUserCount,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    userAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));

      dispatch(setUsers(data.items));
      dispatch(setTotalUserCount(data.totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(toggleFollowingProgress(true, userId));
    userAPI.follow(userId).then((response) => {
      dispatch(toggleFollowingProgress(false, userId));

      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(toggleFollowingProgress(true, userId));
    userAPI.unfollow(userId).then((response) => {
      dispatch(toggleFollowingProgress(false, userId));

      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
    });
  };
};

export default usersReducer;
