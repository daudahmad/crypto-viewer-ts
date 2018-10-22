import {
  PAIRS_FETCH_REQUESTED,
  PAIRS_FETCH_SUCCEEDED,
  PAIRS_FETCH_FAILED
} from "../constants";
import { Pairs, PairsState, StoreState } from "../types";
import { PairsAction } from "../actions";

const initialState: PairsState = { isFetching: false, items: [] };

export default function pairs(
  state = initialState,
  action: PairsAction
): PairsState {
  // console.log(`action type: ${action.type}`);
  switch (action.type) {
    case PAIRS_FETCH_REQUESTED:
      // console.log(`action type: ${action.type}`);
      return { ...state, isFetching: true };

    case PAIRS_FETCH_SUCCEEDED:
      // console.log(`action type: ${action.type}`);
      const nextState = { ...state };
      // Loop over the array here
      nextState.items = action.pairs
        .filter((pair: string) => pair[0][0] === "t")
        .map(
          (pair: string): Pairs => ({
            symbol: pair[0],
            label: `${pair[0].substr(1, 3)}/${pair[0].substr(4, 6)}`,
            baseCurrency: pair[0].substr(1, 3),
            quoteCurrency: pair[0].substr(4, 6)
          })
        );
      nextState.isFetching = false;
      return nextState;

    case PAIRS_FETCH_FAILED:
      return { ...state, isFetching: false };

    default:
      return state;
  }
}

// {
// isFetching: false,
// items: [{ symbol: string, label: string }]
// },

// .sort((a: Pairs, b: Pairs) => {
//   return a.label > b.label ? 1 : -1;
// });
