import { put, takeLatest, call } from "redux-saga/effects";

import {
  ADD_DATA,
  ADD_DATA_SUCCESS,
  ERROR,
  GET_ALL_DATA,
  GET_ALL_DATA_SUCCESS,
} from "../actionTypes";
import authInstance from "../../api/apiConfig";

function* addItem(action) {
  try {
    const response = yield call(authInstance.post, "add", action.payload);

    yield put({
      type: ADD_DATA_SUCCESS,
      payload: response?.data,
    });
  } catch (error) {
    const err = error.response.data.message;
    yield put({
      type: ERROR,
      payload: err,
    });
  }
}

function* getAllItem(action) {

  try {
    const response = yield call(authInstance.get, "allitems");

    yield put({
      type: GET_ALL_DATA_SUCCESS,
      payload: response?.data,
    });
  } catch (error) {
    const err = error.response.data.message;
    yield put({
      type: ERROR,
      payload: err,
    });
  }
}

export default function* itemActionWatcher() {
  yield takeLatest(ADD_DATA, addItem);
  yield takeLatest(GET_ALL_DATA, getAllItem);
}
