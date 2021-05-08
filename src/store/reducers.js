import { combineReducers } from 'redux'

import { authStore } from './authStore'
import { boardStore } from './boardStore'
import { notifierStore } from './notifierStore'

/**
 * Combine application reducers together
 * @return {Reducer}
 */
export default combineReducers({
  authStore,
  boardStore,
  notifierStore,
})
