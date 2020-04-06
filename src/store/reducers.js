import { combineReducers } from "redux";

import { boardStore } from "./boardStore";
import { authStore } from "./authStore";

/**
 * Combine application reducers together
 * @return {Reducer}
 */
export default combineReducers({
    authStore,
    boardStore
});
