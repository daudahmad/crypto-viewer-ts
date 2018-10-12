import * as constants from "../constants";

export interface RequestPairs {
  type: constants.PAIRS_FETCH_REQUESTED;
}

export interface RequestPairsSucceeded {
  type: constants.PAIRS_FETCH_SUCCEEDED;
  pairs: []
}

export interface RequestPairsFailed {
  type: constants.PAIRS_FETCH_FAILED;
  message: string
}

export type PairsAction = RequestPairs | RequestPairsSucceeded | RequestPairsFailed;

/* 
    These are our action creators 
*/

export function requestPairs(): RequestPairs {
  return {
    type: constants.PAIRS_FETCH_REQUESTED
  };
}

export function requestPairsSucceeded(pairs: []): RequestPairsSucceeded {
  return {
    type: constants.PAIRS_FETCH_SUCCEEDED,
    pairs
  };
}

export function requestPairsFailed(message: string): RequestPairsFailed{
  return {
    type: constants.PAIRS_FETCH_FAILED,
    message
  };
}
