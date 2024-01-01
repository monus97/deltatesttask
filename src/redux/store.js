import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/index";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagaActions/index";

const sagaMiddleWare = createSagaMiddleware();
export  const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare) );

sagaMiddleWare.run(rootSaga);