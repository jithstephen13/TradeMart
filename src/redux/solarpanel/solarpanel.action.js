import axios from "axios";
import * as types from "./solarpanel.actionTypes";

export const Get_solarpanel_item = (order,company) => async (dispatch) => {
  dispatch({ type: types.GET_solarpanel_LOADING });
  try {
    let respnce = await axios.get(
      `https://frail-gold-hen.cyclic.app/solarpanel?page=1&limit=60&company=${company.toString()}&sort=rating,${order}`
    
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
      "https://frail-gold-hen.cyclic.app/solarpanel/add",
      cred
    );
  
    dispatch({ type: types.ADD_solarpanelT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.ADD_solarpanel_ERROR });
  }
};

export const UPDATE_solarpanel_item = (id, chenge) => async (dispatch) => {
  dispatch({ type: types.UPDATE_solarpanel_LOADING });
  try {
    let res = await axios.patch(
      `https://frail-gold-hen.cyclic.app/solarpanel/update/${id}`,
      chenge
    );
   
    dispatch({ type: types.UPDATE_solarpanel_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.UPDATE_solarpanel_ERROR });
  }
};

export const REMOVE_solarpanel_item = (id) => async (dispatch) => {

  dispatch({ type: types.REMOVE_solarpanel_LOADING });
  try {
    let res = await axios.delete(
      `https://frail-gold-hen.cyclic.app/solarpanel/delete/${id}`
    );
   
    dispatch({ type: types.REMOVE_solarpanel_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: types.REMOVE_solarpanel_ERROR });
  }
};
export const sortMysolarpanel = (how) => (dispatch) => {
  dispatch({ type: types.SORT_solarpanel, payload: how });
};
