import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

import CssBaseLine from "@material-ui/core/CssBaseLine";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import store from "./store";
import App from "./App";

const theme = createMuiTheme();

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
            <Provider store={store}>
                <CssBaseLine />
                <App />
            </Provider>
        </SnackbarProvider>
    </ThemeProvider>,
    document.getElementById("root")
);
