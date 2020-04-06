/**
 * This file describe action types for auth store
 *
 * Action types start with SET keyword means that action
 * set data to store with payload
 *
 * Otherwise this mean that we listen this action types
 */
export const ActionTypes = {
    SET_FORM_ERROR: "AUTH__SET_FORM_ERROR",
    SET_AUTH_USER: "AUTH__SET_AUTH_USER",
    SET_FORM_LOADING: "AUTH__SET_FORM_LOADING",
    /**
     * =================================================
     * Below this comment put "listening" action types
     * =================================================
     */
    LOGIN: "AUTH__LOGIN",
    LOGOUT: "AUTH__LOGOUT"
};
