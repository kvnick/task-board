import {
    priorities,
    seriousness,
    statuses,
    historyActions,
    statusesLife
} from "../../services/data";
import { ActionTypes } from "./actionTypes";

const initialState = {
    statuses,
    seriousness,
    priorities,
    historyActions,
    statusesLife,
    loading: false,
    tasks: [],
    task: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_TASKS_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case ActionTypes.SET_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        case ActionTypes.SET_TASK:
            return {
                ...state,
                task: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
