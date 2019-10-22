import { spawn, all, call } from 'redux-saga/effects';

import { boardWatchers } from './board/logic';
import { authWatchers } from './auth/logic';

export default function* sagaWatchers() {
  const sagas = [
    ...boardWatchers,
    ...authWatchers
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
}
