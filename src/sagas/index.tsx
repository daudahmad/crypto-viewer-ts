import {
  call,
  put,
  takeLatest,
  fork
} from "redux-saga/effects";
import fetchPairsApi from "../lib/fetch-pairs";
import * as actions from "../actions";

// worker Saga: will be fired on PAIRS_FETCH_REQUESTED action
function* fetchPairs() {
  try {
    const pairs = yield call(fetchPairsApi);
    yield put(actions.requestPairsSucceeded(pairs));
    // yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put(actions.requestPairsFailed(e.message));
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

/*
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(actions.requestPairs, fetchPairs);
  //   yield takeLatest("USER_FETCH_REQUESTED", fetchPairs);
}

export default function* root(): any {
  yield fork(mySaga);
}

// export default mySaga;
