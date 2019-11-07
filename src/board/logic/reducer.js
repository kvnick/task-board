import {
    priorities,
    seriousness,
    statuses,
    historyActions,
    statusesLife,
} from '../../data';

import { ActionTypes } from './actionTypes';

const initialState = {
    statuses,
    seriousness,
    priorities,
    historyActions,
    statusesLife,
    tasks: [],
    error: null,
    loading: false,
    task: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TASKS_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case ActionTypes.SET_TASKS:
            return {
                ...state,
                tasks: action.payload,
            };
        case ActionTypes.SET_TASK:
            return {
                ...state,
                task: action.payload,
            };
        case ActionTypes.TASKS_SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
