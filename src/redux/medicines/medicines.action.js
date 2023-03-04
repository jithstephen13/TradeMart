import axios from "axios";
import * as types from "./medicines.actionTypes";

export const Get_medicines_item = (order,company) => async (dispatch) => {
  dispatch({ type: types.GET_medicines_LOADING });
  try {
    let respnce = await axios.get(
      `https://frail-gold-hen.cyclic.app/medicin?page=1&limit=45&company=${company.toString()}&sort=rating,${order}`
    );
    setTimeout(function(){
         return dispatch({ type: types.GET_medicines_SUCCESS, payload: respnce.data });
    },3000)
    
  } catch (error) {
    dispatch({ type: types.GET_medicines_ERROR });
  }
};

export const ADD_medicines_item = (cred) => async (dispatch) => {
  dispatch({ type: types.ADD_medicines_LOADING });
  try {
    let res = await axios.post(
      "https://frail-gold-hen.cyclic.app/medicin/add",
      cred
    );
    
    dispatch({ type: types.ADD_medicinesT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.ADD_medicines_ERROR });
  }
};

export const UPDATE_medicines_item = (id, change) => async (dispatch) => {
  dispatch({ type: types.UPDATE_medicines_LOADING });
  try {
    let res = await axios.patch(
      `https://frail-gold-hen.cyclic.app/medicin/update/${id}`,
      change
    );

    dispatch({ type: types.UPDATE_medicines_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.UPDATE_medicines_ERROR });
  }
};

export const REMOVE_medicines_item = (id) => async (dispatch) => {
 
  dispatch({ type: types.REMOVE_medicines_LOADING });
  try {
    let res = await axios.delete(
      `https://frail-gold-hen.cyclic.app/medicin/delete/${id}`
    );
  
    dispatch({ type: types.REMOVE_medicines_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: types.REMOVE_medicines_ERROR });
  }
};
export const sortMymedicines = (how) => (dispatch) => {
  dispatch({ type: types.SORT_medicinesES, payload: how });
};
