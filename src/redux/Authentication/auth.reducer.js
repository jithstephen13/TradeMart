import { getItem, setItem } from "../../utility/localStorage";
import * as types from "./auth.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  userData: getItem("userData") || {},
  isAuth: false,
  userlist: [],
  adminlist: [],
};

export const Authreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.ADD_USER_SUCCESS: {
      setItem("userData", payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
      };
    }

    case types.ADD_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.LOGIN_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.LOGIN_USER_SUCCESS: {
      setItem("userData", payload);
     
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
      };
    }

    case types.LOGIN_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.LOGOut_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case types.LOGOut_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case types.LOGOut_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.GET_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case types.GET_USER_SUCCESS: {
      let data = payload.map((doc) => ({ ...doc.data(), id: doc.id }));
      return {
        ...state,
        isLoading: false,
        isError: false,
        userlist: data,
      };
    }
    case types.GET_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.REMOVE_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.REMOVE_USER_SUCCESS: {
      let deld = state.userlist.filter((user) => user.id != payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        userlist: deld,
      };
    }
    case types.REMOVE_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.ADD_Admin_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.ADD_Admin_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case types.ADD_Admin_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.Get_Admin_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case types.Get_Admin_SUCCESS: {
      let data = payload.map((doc) => ({ ...doc.data(), id: doc.id }));
      
      return {
        ...state,
        isLoading: false,
        isError: false,
        adminlist: data,
      };
    }
    case types.Get_Admin_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};
