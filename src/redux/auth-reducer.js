import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "react-01/auth/SET_USER_DATA";

const initialState = {
  usersId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
});

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.getMyProfile();

  if (response.data.resultCode === 0) {
    const { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    const error =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error!";
    dispatch(stopSubmit("login", { _error: error }));
  }
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
