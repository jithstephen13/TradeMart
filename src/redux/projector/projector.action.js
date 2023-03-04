import axios from "axios";
import * as types from "./projector.actionTypes";

export const Get_projector_item = (order,company) => async (dispatch) => {
  dispatch({ type: types.GET_projector_LOADING });
  try {
    let respnce = await axios.get(
      `https://frail-gold-hen.cyclic.app/projector?page=1&limit=60&company=${company.toString()}&sort=rating,${order}`
    );
    setTimeout(function(){
      return dispatch({ type: types.GET_projector_SUCCESS, payload: respnce.data });
    },3000)
    
  } catch (error) {
    dispatch({ type: types.GET_projector_ERROR });
  }
};

export const ADD_projector_item = (cred) => async (dispatch) => {
  dispatch({ type: types.ADD_projector_LOADING });
  try {
    let res = await axios.post(
      "https://frail-gold-hen.cyclic.app/projector/add",
      cred
    );
    console.log(res)

    dispatch({ type: types.ADD_projectorT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.ADD_projector_ERROR });
  }
};

export const UPDATE_projector_item = (id, chenge) => async (dispatch) => {
  dispatch({ type: types.UPDATE_projector_LOADING });
  try {
    let res = await axios.patch(
      `https://frail-gold-hen.cyclic.app/projector/update/${id}`,
      chenge
    );

    dispatch({ type: types.UPDATE_projector_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.UPDATE_projector_ERROR });
  }
};

export const REMOVE_projector_item = (id) => async (dispatch) => {
 
  dispatch({ type: types.REMOVE_projector_LOADING });
  try {
    let res = await axios.delete(
      `https://frail-gold-hen.cyclic.app/projector/delete/${id}`
    );

    dispatch({ type: types.REMOVE_projector_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: types.REMOVE_projector_ERROR });
  }
};
export const sortMyprojector = (how) => (dispatch) => {
  dispatch({ type: types.SORT_projectorES, payload: how });
};
