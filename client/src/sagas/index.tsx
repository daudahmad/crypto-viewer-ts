import {
  call,
  put,
  takeLatest,
  fork,
  takeEvery,
  select
} from "redux-saga/effects";
import fetchPairsApi from "../api/fetch-pairs";
import fetchTickerApi from "../api/fetch-ticker";
import { selectedTickerSymbolSelector } from "../reducers/selectedTicker";
import * as actions from "../actions";
import * as constants from "../constants";
// import reducers from "../reducers";

// worker Saga: will be fired on PAIRS_FETCH_REQUESTED action
export function* fetchPairs(): any {
  try {
    const pairs = yield call(fetchPairsApi);
    // console.log("yield call(fetchPairsApi)");
    // console.log(pairs);
    yield put(actions.requestPairsSucceeded(pairs));
    // yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put(actions.requestPairsFailed(e.message));
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* fetchTicker() {
  try {
    const selectedTicker = yield select(selectedTickerSymbolSelector);
    yield put(actions.requestTicker());
    const ticker = yield call(fetchTickerApi, selectedTicker);
    console.log(ticker);
    yield put(actions.requestTickerSucceeded(ticker));
  } catch (e) {
    yield put(actions.requestTickerFailed(e.message));
  }
}

/*
  Does not allow concurrent fetches of pairs. If "PAIRS_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* watchFetchPairs(): any {
  yield takeLatest(constants.PAIRS_FETCH_REQUESTED, fetchPairs);
  // yield takeLatest("USER_FETCH_REQUESTED", fetchPairs);
}

function* watchSelectTicker() {
  // console.log("watchSelectTicker called");
  const res = yield takeEvery(constants.SELECT_TICKER, fetchTicker);
  console.log(res);
}

export default function* root(): any {
  // yield takeLatest(constants.PAIRS_FETCH_REQUESTED, fetchPairs);
  // yield all([watchFetchPairs(), watchSelectTicker()]);
  yield fork(watchFetchPairs);
  yield fork(watchSelectTicker);
}

// export default mySaga;
