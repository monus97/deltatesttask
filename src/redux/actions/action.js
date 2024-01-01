import { ADD_DATA, GET_ALL_DATA} from "../actionTypes";

export const addItem = (data) => {
    return {
      type: ADD_DATA,
      payload : data
    };
  };


export const getAllItems = () => {
    return {
      type: GET_ALL_DATA
    };
  };



