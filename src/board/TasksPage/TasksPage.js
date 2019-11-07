import React from 'react';
import { Switch, Route } from 'react-router';

import { ROUTES } from '../../App';
import { withAuthorization } from '../../utils/Firebase';
import {
    StatusListContainer,
    TaskDetailContainer,
    TaskCreateContainer,
} from '../index';

const PageTasksList = withAuthorization(StatusListContainer);
const PageTaskDetail = withAuthorization(TaskDetailContainer);
const PageTaskCreate = withAuthorization(TaskCreateContainer);

const TasksPage = props => {
    return (
        <Switch>
            <Route path={ROUTES.CREATE_TASK} component={PageTaskCreate} />
            <Route path={ROUTES.PREVIEW_TASK} component={PageTaskDetail} />
            <Route exact path={ROUTES.TASKS_PAGE} component={PageTasksList} />
        </Switch>
    );
};

export default TasksPage;
