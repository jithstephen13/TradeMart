import { setItem } from "../../utility/localStorage";
import * as types from "./auth.actionTypes";
import {
  AddAdminApi,
  AddUserApi,
  DeleteUserAPI,
  GetAllAdminAPI,
  GetAllUseresAPI,
  LoginApi,
  LogoutApi,
} from "./auth.api";

export const AddUser =
  (cred = {}) =>
  async (dispatch) => {
    dispatch({ type: types.ADD_USER_LOADING });

    try {
      let data = await AddUserApi(cred);

      dispatch({ type: types.ADD_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: types.ADD_USER_ERROR });
    }
  };

export const LoginUser =
  (cred = {}) =>
  async (dispatch) => {
    dispatch({ type: types.LOGIN_USER_LOADING });

    try {
      let data = await LoginApi(cred);
      dispatch({ type: types.LOGIN_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: types.LOGIN_USER_ERROR });
    }
  };

export const LogOUT = () => async (dispatch) => {
  dispatch({ type: types.LOGOut_USER_LOADING });
  try {
    let res = await LogoutApi();
    setItem("userData", null);
    dispatch({ type: types.LOGOut_USER_SUCCESS });
  } catch (error) {
    dispatch({ type: types.LOGOut_USER_ERROR });
  }
};

export const GetAllUseres = () => async (dispatch) => {
  dispatch({ type: types.GET_USER_LOADING });
  try {
    let res = await GetAllUseresAPI();
    dispatch({ type: types.GET_USER_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: types.GET_USER_ERROR });
  }
};
export const DeleteUser = (id) => async (dispatch) => {
  dispatch({ type: types.REMOVE_USER_LOADING });
  try {
    let res = await DeleteUserAPI(id);
    dispatch({ type: types.REMOVE_USER_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: types.REMOVE_USER_ERROR });
  }
};

export const AddAdmin =
  (cred = {}) =>
  async (dispatch) => {
    dispatch({ type: types.ADD_Admin_LOADING });

    try {
      let data = await AddAdminApi(cred);
      dispatch({ type: types.ADD_Admin_SUCCESS });
    } catch (error) {
      dispatch({ type: types.ADD_Admin_ERROR });
    }
  };

export const GetAllAdmin = () => async (dispatch) => {
  dispatch({ type: types.Get_Admin_LOADING });
  try {
    let res = await GetAllAdminAPI();
    dispatch({ type: types.Get_Admin_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: types.Get_Admin_ERROR });
  }
};
