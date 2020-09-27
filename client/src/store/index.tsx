import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";
import rootSaga from "../sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    typeof window === "object" &&
    typeof (window as any).devToolsExtension !== "undefined"
      ? (window as any).devToolsExtension()
      : (f: any) => f
  )
);
// console.log(store.getState());

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
