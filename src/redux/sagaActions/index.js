import { all } from "redux-saga/effects";
import itemActionWatcher from "./itemActions";

export default function* rootSaga() {
  yield all([
    itemActionWatcher(),
  ]);
}
