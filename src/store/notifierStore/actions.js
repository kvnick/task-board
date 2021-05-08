import { ActionTypes } from './actionTypes'

/**
 * Action creator to add notification
 * @param {object} notification
 * @return {object} Action object with payload
 */
export function enqueueSnackbar(notification) {
  return {
    type: ActionTypes.ENQUEUE_SNACKBAR,
    notification: {
      key: new Date().getTime() + Math.random(),
      ...notification,
      options: {
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom',
        },
        autoHideDuration: 4000,
        ...notification.options,
      },
    },
  }
}

/**
 * Action creator to close notification
 * @param {string | number} key
 * @return {object} Action object with payload
 */
export function closeSnackbar(key) {
  return {
    type: ActionTypes.CLOSE_SNACKBAR,
    dismissAll: !key,
    key,
  }
}

/**
 * Action creator to remove notification
 * @param {string | number} key
 * @return {object} Action object with payload
 */
export function removeSnackbar(key) {
  return {
    type: ActionTypes.REMOVE_SNACKBAR,
    key,
  }
}
