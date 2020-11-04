import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "react-01/profile/ADD-POST";
const SET_USER_PROFILE = "react-01/profile/SET_USER_PROFILE";
const SET_STATUS = "react-01/profile/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "react-01/profile/SAVE_PHOTO_SUCCESS";

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

    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };

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

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
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

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0)
    dispatch(savePhotoSuccess(response.data.data.photos));
};

export const saveProfileData = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfileData(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("profileData", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
