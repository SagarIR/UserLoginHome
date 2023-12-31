import { USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constant/constant";

const initialState = {
  user: [],
  isLoginIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginIn: true,
        user: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoginIn: false,
        user: [],
      };
    default:
      return state;
  }
};
