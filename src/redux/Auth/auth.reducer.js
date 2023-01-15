import { setItem } from "../../utility/localStorage";
import * as types from "./auth.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  userData: {},
  isAuth: false,
  userlist: [],


};

export const Authreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    

    default:
      return state;
  }
};
