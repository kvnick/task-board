import { combineReducers } from 'redux';

import { boardReducer } from './board/logic';
import { authReducer } from './auth/logic';

export default combineReducers({
    authStore: authReducer,
    boardStore: boardReducer,
});
