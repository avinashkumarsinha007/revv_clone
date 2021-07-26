import {
  GET_CARS_REQUEST_FAILED,
  GET_CARS_REQUEST_SENT,
  GET_CARS_REQUEST_SUCCESSFULL,
} from "./exploreCarsActionType";

const init = {
  isLoading: false,
  isError: false,
  carData: [],
};

export const ExploreCarsReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_CARS_REQUEST_SENT: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_CARS_REQUEST_SUCCESSFULL: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        carData: payload,
      };
    }
    case GET_CARS_REQUEST_FAILED: {
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
