import React from 'react';
import { Switch, Route } from 'react-router';
import { useRouteMatch } from 'react-router-dom';

import { ROUTES } from '../../App';
import { withAuthorization } from '../../utils/Firebase';
import {
    StatusListContainer,
    TaskDetailContainer,
    TaskCreateContainer
} from '../index';

const PageTasksList = withAuthorization(StatusListContainer);
const PageTaskDetail = withAuthorization(TaskDetailContainer);
const PageTaskCreate = withAuthorization(TaskCreateContainer);

const TasksPage = (props) => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={`${match.path}/create`} component={PageTaskCreate} />
            <Route path={`${match.path}/:id`} component={PageTaskDetail} />
            <Route exact path={`${match.path}`} component={PageTasksList} />
        </Switch>
    );
};

export default TasksPage;