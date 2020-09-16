const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";

const initialState = {
  users: [],
  pageSize: 100,
  totalUserCount: 0,
  currentPage: 1,
};

export const usersReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUserCountAC = (totalUserCount) => ({
  type: SET_TOTAL_USER_COUNT,
  totalUserCount,
});

export default usersReducer;
