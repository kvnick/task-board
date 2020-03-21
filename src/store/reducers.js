import { combineReducers } from "redux";

import { boardStore } from "./boardStore";
import { authStore } from "./authStore";

export default combineReducers({
    authStore,
    boardStore,
});
