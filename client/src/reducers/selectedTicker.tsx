import {
  SELECT_TICKER,
  TICKER_FETCH_REQUESTED,
  TICKER_FETCH_SUCCEEDED,
  TICKER_FETCH_FAILED
} from "../constants";
import { SelectedTickerState, StoreState } from "../types";
import { SelectTickerAction } from "../actions";

const initialState: SelectedTickerState = {
  tickerSymbol: "",
  tickerDetails: {},
  isFetching: false
};

export default function selectedTicker(
  state = initialState,
  action: SelectTickerAction
): SelectedTickerState {
  switch (action.type) {
    case SELECT_TICKER:
      return { ...state, tickerSymbol: action.tickerSymbol };

    case TICKER_FETCH_REQUESTED:
      return { ...state, isFetching: true };

    case TICKER_FETCH_SUCCEEDED:
      // console.log(`action type: ${action.type}`);
      const nextState = { ...state };
      nextState.isFetching = false;
      // if (action.marketState.length > 0) {
      nextState.tickerDetails = {
        bid: action.tickerState[0],
        bidSize: action.tickerState[1],
        ask: action.tickerState[2],
        askSize: action.tickerState[3],
        dailyChange: action.tickerState[4],
        lastPrice: action.tickerState[6],
        volume: action.tickerState[7]
      };
      return nextState;

    case TICKER_FETCH_FAILED:
      return { ...state, isFetching: false };

    default:
      return state;
  }
}

// export const selectedTickerSelector = (state: any) => state.selectedTicker.tickerSymbol;

export const selectedTickerSymbolSelector = ({
  selectedTicker: { tickerSymbol }
}: {
  selectedTicker: SelectedTickerState;
}) => {
  console.log(selectedTicker);
  return tickerSymbol;
};
