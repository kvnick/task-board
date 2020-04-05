import React from "react";
import { Route, Switch } from "react-router-dom";

import applicationRoutes from "./routes";

const routes = Object.keys(applicationRoutes).map((key, index) => {
    const route = applicationRoutes[key];
    let routeProps = {};
    if (route.exact) {
        routeProps = { ...routeProps, exact: route.exact };
    }
    if (route.render) {
        routeProps = { ...routeProps, render: route.render };
    } else if (route.component) {
        routeProps = { ...routeProps, component: route.component };
    }
    if (route.path) {
        routeProps = { ...routeProps, path: route.path };
    }

    routeProps = { ...routeProps, key: index };

    return <Route {...routeProps} />;
});

function Router() {
    return <Switch>{routes}</Switch>;
}

export default Router;
