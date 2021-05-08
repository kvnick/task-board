import { ActionTypes } from './actionTypes'

const initialState = {
  loading: false,
  authUser: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_FORM_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case ActionTypes.SET_AUTH_USER:
      return {
        ...state,
        authUser: action.payload,
      }
    default:
      return state
  }
}

export default reducer
