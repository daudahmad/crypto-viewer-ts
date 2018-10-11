import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers";
import mySaga from "../sagas";
import { any } from "prop-types";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// console.log(store.getState());

// then run the saga
sagaMiddleware.run(mySaga);

export default store;
