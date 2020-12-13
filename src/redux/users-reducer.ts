import { UsersType } from "./../types/types";
import { userAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objects-helpers";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";
import { Dispatch } from "redux";

const SET_USERS = "react-01/users/SET_USERS";
const FOLLOW = "react-01/users/FOLLOW";
const UNFOLLOW = "react-01/users/UNFOLLOW";
const SET_CURRENT_PAGE = "react-01/users/SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "react-01/users/SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "react-01/users/TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS =
  "react-01/users/TOGGLE_FOLLOWING_IN_PROGRESS";

const initialState = {
  users: [] as Array<UsersType>,
  pageSize: 100,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of users id
};

export type InitialStateType = typeof initialState;

const usersReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
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

type ActionTypes =
  | SetUsersActionType
  | FollowSuccessActionType
  | UnfollowSuccessActionType
  | SetCurrentPageActionType
  | SetTotalUserCountActionType
  | ToggleIsFetchingActionType
  | ToggleFollowingProgressActionType;

type SetUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UsersType>;
};
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({
  type: SET_USERS,
  users,
});

type FollowSuccessActionType = {
  type: typeof FOLLOW;
  userId: number;
};
export const followSuccess = (userId: number): FollowSuccessActionType => ({
  type: FOLLOW,
  userId,
});

type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW;
  userId: number;
};
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({
  type: UNFOLLOW,
  userId,
});

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
export const setCurrentPage = (
  currentPage: number
): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type SetTotalUserCountActionType = {
  type: typeof SET_TOTAL_USER_COUNT;
  totalUserCount: number;
};
export const setTotalUserCount = (
  totalUserCount: number
): SetTotalUserCountActionType => ({
  type: SET_TOTAL_USER_COUNT,
  totalUserCount,
});

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
export const toggleIsFetching = (
  isFetching: boolean
): ToggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

type ToggleFollowingProgressActionType = {
  type: typeof TOGGLE_FOLLOWING_IN_PROGRESS;
  isFetching: boolean;
  userId: number;
};
export const toggleFollowingProgress = (
  isFetching: boolean,
  userId: number
): ToggleFollowingProgressActionType => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const getUsers = (page: number, pageSize: number): ThunkType => {
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
  dispatch: Dispatch<ActionTypes>,
  userId: number,
  apiMethod: any,
  actionCreator: (
    userId: number
  ) => FollowSuccessActionType | UnfollowSuccessActionType
) => {
  dispatch(toggleFollowingProgress(true, userId));

  const response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }

  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      userAPI.follow.bind(userAPI),
      followSuccess
    );
  };
};

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      userAPI.unfollow.bind(userAPI),
      unfollowSuccess
    );
  };
};

export default usersReducer;
