import reducer from './reducer';
import * as actions from './actions';
import { ActionTypes } from './actionTypes';
import * as selectors from './selectors';
import { watchers } from './watchers';

export { reducer as boardReducer };
export { actions as BoardActions };
export { ActionTypes as BoardActionTypes };
export { selectors as BoardSelectors };
export { watchers as boardWatchers };
