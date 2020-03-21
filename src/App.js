import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import NotFoundError from "./components/atoms/NotFoundError";
import FooterContainer from "./containers/FooterContainer";
import HeaderContainer from "./containers/HeaderContainer";
import TasksPage from "./components/pages/TasksPage";
import LoginPage from "./components/pages/LoginPage";
import {
    withAuthentication,
    withAuthorization,
} from "./services/utils/Firebase";
import history from "./services/utils/customHistory";

export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    TASKS_PAGE: "/task",
    CREATE_TASK: "/task/create",
    PREVIEW_TASK: "/task/:id",
};

const PageTasks = withAuthorization(TasksPage);
const PageNotFound = withAuthorization(NotFoundError);
const redirectToTasksPage = props => {
    return <Redirect to={ROUTES.TASKS_PAGE} />;
};

function App() {
    return (
        <Router history={history}>
            <HeaderContainer />
            <Switch>
                <Route exact path={ROUTES.HOME} render={redirectToTasksPage} />
                <Route
                    path={ROUTES.TASKS_PAGE}
                    render={props => <PageTasks {...props} />}
                />
                <Route
                    path={ROUTES.LOGIN}
                    component={LoginPage}
                />
                <Route render={props => <PageNotFound {...props} />} />
            </Switch>
            <FooterContainer />
        </Router>
    );
}

export default withAuthentication(App);
