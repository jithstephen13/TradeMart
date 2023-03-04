import { upload } from "@testing-library/user-event/dist/upload";
import * as types from "./medicines.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  medicines: [],
};

export const medicinesreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_medicines_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_medicines_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        medicines: payload,
      };
    }
    case types.GET_medicines_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.ADD_medicines_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.ADD_medicinesT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        medicines: [...state.medicines, payload],
      };
    }

    case types.ADD_medicines_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.UPDATE_medicines_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.UPDATE_medicines_SUCCESS: {
      let Updated = state.medicines.map((medicines) => {
        if (medicines.id == payload.id) {
          return { ...medicines, payload };
        }
        return medicines;
      });
      return {
        ...state,
        medicines: Updated,
      };
    }

    case types.UPDATE_medicines_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.REMOVE_medicines_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.REMOVE_medicines_SUCCESS: {
      let removed = state.medicines.filter(
        (medicines) => medicines.id != payload
      );

      return {
        ...state,
        medicines: removed,
      };
    }
    case types.REMOVE_medicines_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    // case types.SORT_medicinesES: {
    //   if (payload == "high") {
    //     let sorted = state.medicines.medins.sort(
    //       (a, b) => Number(a.price) - Number(b.price)
    //     );

    //     return { ...state, medicinesmedins.medins: [...sorted] };
    //   } else if (payload == "low") {
    //     let sorted = state.medicines.medins.sort(
    //       (a, b) => Number(b.price) - Number(a.price)
    //     );
    //     return { ...state, medicines: [...sorted] };
    //   }
    // }

    default: {
      return state;
    }
  }
};
