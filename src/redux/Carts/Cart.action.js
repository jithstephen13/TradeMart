import axios from "axios";
import * as types from "./Cart.actionTypes";

export const Get_Cart_item = () => async (dispatch) => {
  dispatch({ type: types.GET_Cart_LOADING });
  try {
    let respnce = await axios.get(
      `https://frail-gold-hen.cyclic.app/cart`
    );
    dispatch({ type: types.GET_Cart_SUCCESS, payload: respnce.data });
  } catch (error) {
    dispatch({ type: types.GET_Cart_ERROR });
  }
};

export const ADD_Cart_item = (cred) => async (dispatch) => {
  dispatch({ type: types.ADD_Cart_LOADING });
  try {
    let res = await axios.post(
      "https://frail-gold-hen.cyclic.app/cart/addtocart",
      cred
    );
    console.log(res.data);
    dispatch({ type: types.ADD_Cart_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.ADD_Cart_ERROR });
  }
};

export const REMOVE_Cart_item = (id) => async (dispatch) => {
  console.log(id);
  dispatch({ type: types.REMOVE_Cart_LOADING });
  try {
    let res = await axios.delete(`/Cart`);
    console.log(res.data);
    dispatch({ type: types.REMOVE_Cart_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: types.REMOVE_Cart_ERROR });
  }
};
