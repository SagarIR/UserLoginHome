import { USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constant/constant";

export const userLogin = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
  return {
    type: USER_LOGIN_SUCCESS,
    payload: userData,
  };
};

export const userLogout = () => {
  localStorage.removeItem("user");
  return {
    type: USER_LOGOUT,
  };
};
