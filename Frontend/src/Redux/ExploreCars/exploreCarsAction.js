import {
  GET_CARS_REQUEST_SENT,
  GET_CARS_REQUEST_SUCCESSFULL,
  GET_CARS_REQUEST_FAILED,
} from "./exploreCarsActionType";
import Axios from "axios";

const getCarsRequest = () => {
  return {
    type: GET_CARS_REQUEST_SENT,
    payload: "",
  };
};
const getCarsRequestSuccess = (payload) => {
  return {
    type: GET_CARS_REQUEST_SUCCESSFULL,
    payload: payload,
  };
};
const getCarsRequestFailure = (payload) => {
  return {
    type: GET_CARS_REQUEST_FAILED,
    payload: payload,
  };
};

const getCars = (filter) => (dispatch) => {
  const { location, segment, fuel_type, transmission_type } = filter;

  const axios = Axios.create({
    baseURL: "http://localhost:4000",
  });
  axios({
    url: "/cars",
    method: "get",
    params: {
      location,
      segment,
      fuel_type,
      transmission_type,
    },
  })
    .then((res) => dispatch(getCarsRequestSuccess(res.data.car)))
    .catch((error) => console.log(error))
    .finally((msg) => console.log(msg));
};

export {
  getCarsRequest,
  getCarsRequestSuccess,
  getCarsRequestFailure,
  getCars,
};
