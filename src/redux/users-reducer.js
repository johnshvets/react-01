import { userAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objects-helpers";

const SET_USERS = "react-01/users/SET_USERS";
const FOLLOW = "react-01/users/FOLLOW";
const UNFOLLOW = "react-01/users/UNFOLLOW";
const SET_CURRENT_PAGE = "react-01/users/SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "react-01/users/SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "react-01/users/TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS =
  "react-01/users/TOGGLE_FOLLOWING_IN_PROGRESS";

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
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
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

export const getUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const data = await userAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUserCount(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));

  const response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }

  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => {
  return (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      userAPI.follow.bind(userAPI),
      followSuccess
    );
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      userAPI.unfollow.bind(userAPI),
      unfollowSuccess
    );
  };
};

export default usersReducer;
