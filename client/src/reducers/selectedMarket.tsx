import { SELECT_MARKET } from "../constants";
import { Pairs, PairsState, StoreState } from "../types";
import { SelectMarketAction } from "../actions";

const initialState: any = { selectedMarket: "" };

export default function selectedMarket(
  state = initialState,
  action: SelectMarketAction
): any {
  //   console.log(`action type: ${action.type}`);
  switch (action.type) {
    case SELECT_MARKET:
      //   console.log(`action type: ${action.type}`);
      return { ...state, selectedMarket: action.marketSymbol };

    default:
      return state;
  }
}
