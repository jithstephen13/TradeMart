import { upload } from "@testing-library/user-event/dist/upload";
import * as types from "./Cart.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  Cart: [],
};

export const Cartreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_Cart_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_Cart_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        Cart: payload,
      };
    }
    case types.GET_Cart_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.ADD_Cart_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.ADD_Cart_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        Cart: [...state.Cart, payload],
      };
    }

    case types.ADD_Cart_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.REMOVE_Cart_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.REMOVE_Cart_SUCCESS: {
      let removed = state.Cart.filter((Cart) => Cart.id != payload);

      return {
        ...state,
        Cart: removed,
      };
    }
    case types.REMOVE_Cart_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
