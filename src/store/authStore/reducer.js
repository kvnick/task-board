import { ActionTypes } from "./actionTypes";

/*
    authUser: {
        email,
        name,
        id
    }
*/
const initialState = {
    error: null,
    loading: false,
    authUser: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FORM_SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case ActionTypes.FORM_SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case ActionTypes.SET_AUTH_USER:
            return {
                ...state,
                authUser: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
