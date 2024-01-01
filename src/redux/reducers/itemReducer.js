import { ADD_DATA_SUCCESS, ERROR, GET_ALL_DATA_SUCCESS } from "../actionTypes";

const initialState = {
  error: false,
  newItemData: null,
  allItems: null,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA_SUCCESS:
      return {
        ...state,
        error: false,
        newItemData: action.payload,
      };
    case GET_ALL_DATA_SUCCESS:
      return {
        ...state,
        error: false,
        allItems: action.payload,
      };

    case ERROR:
      return {
        ...state,
        error: true,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default itemReducer;
