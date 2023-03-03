import axios from "axios";
import * as types from "./solarpanel.actionTypes";

export const Get_solarpanel_item = () => async (dispatch) => {
  dispatch({ type: types.GET_solarpanel_LOADING });
  try {
    let respnce = await axios.get(
      `https://trademart-data-2zur.vercel.app/solarpanel`
    );
    setTimeout(function(){
      return dispatch({ type: types.GET_solarpanel_SUCCESS, payload: respnce.data });
    },3000)
    
  } catch (error) {
    dispatch({ type: types.GET_solarpanel_ERROR });
  }
};

export const ADD_solarpanel_item = (cred) => async (dispatch) => {
  dispatch({ type: types.ADD_solarpanel_LOADING });
  try {
    let res = await axios.post(
      "https://trademart-data-2zur.vercel.app/solarpanel",
      cred
    );
    console.log(res.data);
    dispatch({ type: types.ADD_solarpanelT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.ADD_solarpanel_ERROR });
  }
};

export const UPDATE_solarpanel_item = (id, chenge) => async (dispatch) => {
  dispatch({ type: types.UPDATE_solarpanel_LOADING });
  try {
    let res = await axios.patch(
      `https://trademart-data-2zur.vercel.app/solarpanel/${id}`,
      chenge
    );
    console.log(res.data);
    dispatch({ type: types.UPDATE_solarpanel_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.UPDATE_solarpanel_ERROR });
  }
};

export const REMOVE_solarpanel_item = (id) => async (dispatch) => {
  console.log(id);
  dispatch({ type: types.REMOVE_solarpanel_LOADING });
  try {
    let res = await axios.delete(
      `https://trademart-data-2zur.vercel.app/solarpanel/${id}`
    );
    console.log(res.data);
    dispatch({ type: types.REMOVE_solarpanel_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: types.REMOVE_solarpanel_ERROR });
  }
};
export const sortMysolarpanel = (how) => (dispatch) => {
  dispatch({ type: types.SORT_solarpanel, payload: how });
};
