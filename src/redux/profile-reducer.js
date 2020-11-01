import { profileAPI } from "../api/api";

const ADD_POST = "react-01/profile/ADD-POST";
const SET_USER_PROFILE = "react-01/profile/SET_USER_PROFILE";
const SET_STATUS = "react-01/profile/SET_STATUS";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 11 },
    { id: 2, message: "It's my first post.", likesCount: 11 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setProfileStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);

  dispatch(setUserProfile(response.data));
};

export const getProfileStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);

  dispatch(setProfileStatus(response.data));
};

export const updateProfileStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) dispatch(setProfileStatus(status));
};

export default profileReducer;
