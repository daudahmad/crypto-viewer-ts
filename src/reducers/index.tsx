import { combineReducers } from "redux";
import {
  PAIRS_FETCH_REQUESTED,
  PAIRS_FETCH_SUCCEEDED,
  PAIRS_FETCH_FAILED
} from "../constants";
import { PairsAction } from "../actions";

function pairs(
  state = {
    isFetching: false,
    items: []
  },
  action: PairsAction
) {
  // console.log(state);
  switch (action.type) {
    case PAIRS_FETCH_REQUESTED:
      return { ...state, isFetching: true };

    case PAIRS_FETCH_SUCCEEDED:
      return { ...state, items: action.pairs, isFetching: false };

    case PAIRS_FETCH_FAILED:
      return { ...state, isFetching: false };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  pairs
});
// console.log(rootReducer);

export default rootReducer;
