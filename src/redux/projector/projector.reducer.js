import { upload } from "@testing-library/user-event/dist/upload";
import * as types from "./projector.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  projector: [],
};

export const projectorreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_projector_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_projector_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        projector: payload,
      };
    }
    case types.GET_projector_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.ADD_projector_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.ADD_projectorT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        projector: [...state.projector, payload],
      };
    }

    case types.ADD_projector_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.UPDATE_projector_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.UPDATE_projector_SUCCESS: {
      let Updated = state.projector.map((projector) => {
        if (projector.id == payload.id) {
          return { ...projector, payload };
        }
        return projector;
      });
      return {
        ...state,
        projector: Updated,
      };
    }

    case types.UPDATE_projector_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.REMOVE_projector_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.REMOVE_projector_SUCCESS: {
      let removed = state.projector.filter(
        (projector) => projector.id != payload
      );

      return {
        ...state,
        projector: removed,
      };
    }
    case types.REMOVE_projector_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.SORT_projectorES: {
      if (payload == "high") {
        let sorted = state.projector.sort(
          (a, b) => Number(a.price) - Number(b.price)
        );

        return { ...state, projector: [...sorted] };
      } else if (payload == "low") {
        let sorted = state.projector.sort(
          (a, b) => Number(b.price) - Number(a.price)
        );
        return { ...state, projector: [...sorted] };
      }
    }

    default: {
      return state;
    }
  }
};
