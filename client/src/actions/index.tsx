import * as constants from "../constants";
import MarketSymbol from "../components/MarketSymbol";
import { Pairs } from "../types";

export interface RequestPairs {
  type: constants.PAIRS_FETCH_REQUESTED;
}

export interface RequestPairsSucceeded {
  type: constants.PAIRS_FETCH_SUCCEEDED;
  pairs: Array<Array<any>>;
}

export interface RequestPairsFailed {
  type: constants.PAIRS_FETCH_FAILED;
  message: string;
}

export type PairsAction =
  | RequestPairs
  | RequestPairsSucceeded
  | RequestPairsFailed;

/* 
    These are our action creators 
*/

export function requestPairs(): RequestPairs {
  return {
    type: constants.PAIRS_FETCH_REQUESTED
  };
}

export function requestPairsSucceeded(
  pairs: Array<Array<any>>
): RequestPairsSucceeded {
  return {
    type: constants.PAIRS_FETCH_SUCCEEDED,
    pairs
  };
}

export function requestPairsFailed(message: string): RequestPairsFailed {
  return {
    type: constants.PAIRS_FETCH_FAILED,
    message
  };
}

/* 
  Select ticker action
*/

export interface SelectTicker {
  type: constants.SELECT_TICKER;
  tickerSymbol: string;
}

export const selectTicker = (tickerSymbol: string): SelectTicker => ({
  type: constants.SELECT_TICKER,
  tickerSymbol
});

/* 
  Requesting selected ticker's market state
*/

export interface RequestTicker {
  type: constants.TICKER_FETCH_REQUESTED;
}

export interface RequestTickerSucceeded {
  type: constants.TICKER_FETCH_SUCCEEDED;
  tickerState: Array<number>;
}

export interface RequestTickerFailed {
  type: constants.TICKER_FETCH_FAILED;
  message: string;
}

export function requestTicker(): RequestTicker {
  return {
    type: constants.TICKER_FETCH_REQUESTED
  };
}

export function requestTickerSucceeded(
  tickerState: []
): RequestTickerSucceeded {
  return {
    type: constants.TICKER_FETCH_SUCCEEDED,
    tickerState
  };
}

export function requestTickerFailed(message: string): RequestTickerFailed {
  return {
    type: constants.TICKER_FETCH_FAILED,
    message
  };
}

export type SelectTickerAction =
  | SelectTicker
  | RequestTicker
  | RequestTickerSucceeded
  | RequestTickerFailed;

export type TickerActions = PairsAction | SelectTickerAction;
