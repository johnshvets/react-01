import { PhotosType, PostType, ProfileType } from "./../types/types";
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
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
};

export type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
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
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };

    default:
      return state;
  }
};

type AddPostActionType = {
  type: typeof ADD_POST;
  newPostText: string;
};
export const addPost = (newPostText: string): AddPostActionType => ({
  type: ADD_POST,
  newPostText,
});

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
export const setUserProfile = (
  profile: ProfileType
): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile,
});

type SetProfileStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setProfileStatus = (
  status: string
): SetProfileStatusActionType => ({
  type: SET_STATUS,
  status,
});

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};
export const savePhotoSuccess = (
  photos: PhotosType
): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getProfile(userId);

  dispatch(setUserProfile(response.data));
};

export const getProfileStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId);

  dispatch(setProfileStatus(response.data));
};

export const updateProfileStatus = (status: string) => async (
  dispatch: any
) => {
  const response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) dispatch(setProfileStatus(status));
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0)
    dispatch(savePhotoSuccess(response.data.data.photos));
};

export const saveProfileData = (profile: ProfileType) => async (
  dispatch: any,
  getState: any
) => {
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
