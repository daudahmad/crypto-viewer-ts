import { combineReducers } from "redux";
import pairs from "./pairs";
import selectedMarket from "./selectedMarket";

export default combineReducers({
  pairs,
  selectedMarket
});
// console.log(rootReducer);

// export default rootReducer;
