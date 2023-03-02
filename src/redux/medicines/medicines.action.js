import axios from "axios";
import * as types from "./medicines.actionTypes";

export const Get_medicines_item = () => async (dispatch) => {
  dispatch({ type: types.GET_medicines_LOADING });
  try {
    let respnce = await axios.get(
      `https://trademart-data-2zur.vercel.app/medicines`
    );
    dispatch({ type: types.GET_medicines_SUCCESS, payload: respnce.data });
  } catch (error) {
    dispatch({ type: types.GET_medicines_ERROR });
  }
};

export const ADD_medicines_item = (cred) => async (dispatch) => {
  dispatch({ type: types.ADD_medicines_LOADING });
  try {
    let res = await axios.post(
      "https://trademart-data-2zur.vercel.app/medicines",
      cred
    );
    console.log(res.data);
    dispatch({ type: types.ADD_medicinesT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.ADD_medicines_ERROR });
  }
};

export const UPDATE_medicines_item = (id, change) => async (dispatch) => {
  dispatch({ type: types.UPDATE_medicines_LOADING });
  try {
    let res = await axios.patch(
      `https://trademart-data-2zur.vercel.app/medicines/${id}`,
      change
    );
    console.log(res.data);
    dispatch({ type: types.UPDATE_medicines_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.UPDATE_medicines_ERROR });
  }
};

export const REMOVE_medicines_item = (id) => async (dispatch) => {
  console.log(id);
  dispatch({ type: types.REMOVE_medicines_LOADING });
  try {
    let res = await axios.delete(
      `https://trademart-data-2zur.vercel.app/medicines/${id}`
    );
    console.log(res.data);
    dispatch({ type: types.REMOVE_medicines_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: types.REMOVE_medicines_ERROR });
  }
};
export const sortMymedicines = (how) => (dispatch) => {
  dispatch({ type: types.SORT_medicinesES, payload: how });
};
