import { combineReducers } from "redux";
import pairs from "./pairs";
import selectedTicker from "./selectedTicker";

export default combineReducers({
  pairs,
  selectedTicker
});
// console.log(rootReducer);

// export default rootReducer;
