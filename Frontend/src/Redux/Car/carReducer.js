import { GET_CAR_BY_ID_FAILURE, GET_CAR_BY_ID_REQUEST, GET_CAR_BY_ID_SUCCESS } from "./carActionType"

const instate = {
    car_data: {},
    isLoading: false,
    isError:false
}

export const carReducer = (state=instate,{type,payload}) => {
    
        switch(type) {
            case GET_CAR_BY_ID_REQUEST:
                return {
                    ...state,
                    isLoading: true
                }
                case GET_CAR_BY_ID_SUCCESS:
                    return {
                        ...state,
                        car_data:payload,
                        isLoading: false
                }
                case GET_CAR_BY_ID_FAILURE:
                    return {
                        ...state,
                        isError: true,
                        car_data:payload
                    }
            default:
                return state
        }
    
}