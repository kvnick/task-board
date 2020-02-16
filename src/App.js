import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { FooterContainer } from './layout/Footer';
import { HeaderContainer } from './layout/Header';
import { NotFoundError } from './errors';
import { TasksPage } from './board';
import { LoginPageContainer } from './auth/LoginPage';
import { withAuthentication, withAuthorization } from './utils/Firebase';
import history from './utils/customHistory';

export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    TASKS_PAGE: '/task',
    CREATE_TASK: '/task/create',
    PREVIEW_TASK: '/task/:id',
};

const PageTasks = withAuthorization(TasksPage);
const PageNotFound = withAuthorization(NotFoundError);
const PageLogin = props => <LoginPageContainer {...props} />;
const redirectToTasksPage = props => {
    return <Redirect to={ROUTES.TASKS_PAGE} />;
};

const App = props => {
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
                    component={props => <PageLogin {...props} />}
                />
                <Route render={props => <PageNotFound {...props} />} />
            </Switch>
            <FooterContainer />
        </Router>
    );
};

export default withAuthentication(App);
