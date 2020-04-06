import { spawn, all, call } from "redux-saga/effects";

import { boardWatchers } from "./boardStore";
import { authWatchers } from "./authStore";

/**
 * Function to apply all watchers for sagas
 */
export default function* sagaWatchers() {
    const sagas = [...boardWatchers, ...authWatchers];

    yield all(
        sagas.map(saga =>
            spawn(function*() {
                while (true) {
                    try {
                        yield call(saga);
                        break;
                    } catch (e) {
                        console.log(e);
                    }
                }
            })
        )
    );
}
