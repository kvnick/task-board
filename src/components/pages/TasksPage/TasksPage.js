import React from "react";
import { Switch, Route } from "react-router";

import { ROUTES } from "../../../App";
import { withAuthorization } from "../../../services/utils/Firebase";
import StatusListContainer from "../../StatusList/StatusListContainer";
import TaskDetailContainer from "../../TaskDetail/TaskDetailContainer";
import TaskCreateContainer from "../../TaskCreate/TaskCreateContainer";

const PageTasksList = withAuthorization(StatusListContainer);
const PageTaskDetail = withAuthorization(TaskDetailContainer);
const PageTaskCreate = withAuthorization(TaskCreateContainer);

function TasksPage() {
    return (
        <Switch>
            <Route path={ROUTES.CREATE_TASK} component={PageTaskCreate} />
            <Route path={ROUTES.PREVIEW_TASK} component={PageTaskDetail} />
            <Route exact path={ROUTES.TASKS_PAGE} component={PageTasksList} />
        </Switch>
    );
}

export default TasksPage;
