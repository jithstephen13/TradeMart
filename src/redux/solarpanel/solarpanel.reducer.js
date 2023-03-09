import { upload } from "@testing-library/user-event/dist/upload";
import * as types from "./solarpanel.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  solarpanel: [],
};

export const solarpanelreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_solarpanel_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_solarpanel_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        solarpanel: payload,
      };
    }
    case types.GET_solarpanel_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.ADD_solarpanel_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.ADD_solarpanelT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        solarpanel: [...state.solarpanel, payload],
      };
    }

    case types.ADD_solarpanel_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.UPDATE_solarpanel_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.UPDATE_solarpanel_SUCCESS: {
      let Updated = state.solarpanel.map((solarpanel) => {
        if (solarpanel.id == payload.id) {
          return { ...solarpanel, payload };
        }
        return solarpanel;
      });
      return {
        ...state,
        solarpanel: Updated,
      };
    }

    case types.UPDATE_solarpanel_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.REMOVE_solarpanel_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.REMOVE_solarpanel_SUCCESS: {
      let removed = state.solarpanel.filter(
        (solarpanel) => solarpanel.id != payload
      );

      return {
        ...state,
        solarpanel: removed,
      };
    }
    case types.REMOVE_solarpanel_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.SORT_solarpanel: {
      if (payload == "high") {
        let sorted = state.solarpanel.sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
        console.log(sorted);

        return { ...state, solarpanel: [...sorted] };
      } else if (payload == "low") {
        let sorted = state.solarpanel.sort(
          (a, b) => Number(b.price) - Number(a.price)
        );
        console.log(sorted);
        return { ...state, solarpanel: [...sorted] };
      }
    }

    default: {
      return state;
    }
  }
};
