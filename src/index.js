import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { SnackbarProvider } from 'notistack';

import CssBaseLine from '@material-ui/core/CssBaseLine';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import sagaWathcers from './sagas';
import reducers from './reducers';
import App from './App';

const theme = createMuiTheme();

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const composeEnhancers =
        typeof window === 'object' &&
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

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
            <Provider store={configureStore()}>
                <CssBaseLine />
                <App />
            </Provider>
        </SnackbarProvider>
    </ThemeProvider>,
    document.getElementById('root')
);
