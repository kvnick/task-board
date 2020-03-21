import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import sagaWathcers from "./sagas";
import reducers from "./reducers";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const composeEnhancers =
        typeof window === "object" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                  /* Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...  */
              })
            : compose;

    const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

    const store = createStore(reducers, enhancer);
    sagaMiddleware.run(sagaWathcers);

    return store;
};

const store = configureStore();

export default store;
