import {
  PAIRS_FETCH_REQUESTED,
  PAIRS_FETCH_SUCCEEDED,
  PAIRS_FETCH_FAILED
} from "../constants";
import { Pairs, PairsState } from "../types";
import { PairsAction } from "../actions";

const initialState: PairsState = { isFetching: false, items: [] };

export default function pairs(
  state = initialState,
  action: PairsAction
  // {
  // isFetching: false,
  // items: [{ symbol: string, label: string }]
  // },
) {
  // console.log(`action type: ${action.type}`);
  switch (action.type) {
    case PAIRS_FETCH_REQUESTED:
      return { ...state, isFetching: true };

    case PAIRS_FETCH_SUCCEEDED:
      const nextState = { ...state };
      // Loop over the array here
      nextState.items = action.pairs
        .filter((pair: string) => pair[0][0] === "t")
        .map((pair: string) => ({
          symbol: pair[0],
          label: `${pair[0].substr(1, 3)}/${pair[0].substr(4, 6)}`
        }));
      // .sort((a: Pairs, b: Pairs) => {
      //   return a.label > b.label ? 1 : -1;
      // });
      nextState.isFetching = false;
      return nextState;

    case PAIRS_FETCH_FAILED:
      return { ...state, isFetching: false };

    default:
      return state;
  }
}
