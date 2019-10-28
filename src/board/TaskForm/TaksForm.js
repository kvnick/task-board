import React from 'react';
import { Form } from 'react-final-form';

import TaskFormRender from './TaskFormRender/TaskFormRender';

const TaskForm = (props) => {
    const {
        statuses,
        priorities,
        seriousness,
        statusesLife,
        onSubmit,
        onCancel,
        onDelete,
        task,
    } = props;

    const getValidStatuses = (initialStatus) => {
        const validStatuses = statusesLife.reduce((validStatuses, statusLive) => {
            const [status, toStatuses] = statusLive;
            validStatuses[status] = toStatuses;
            return validStatuses;
        }, {});

        return validStatuses[initialStatus]
            ? [...validStatuses[initialStatus], initialStatus]
            : statuses;
    };

    const handleDelete = task && task.id ? () => onDelete(task.id) : null;
    const validStatuses = getValidStatuses(task ? task.status : []);
    const subscription = {
        pristine: true,
        values: true,
        initialValues: true
    };

    return (
        <Form
            initialValues={task}
            onSubmit={onSubmit}
            subscription={subscription}
        >
            {formProps => (
                <TaskFormRender
                    onCancel={onCancel}
                    onDelete={handleDelete}
                    statuses={statuses}
                    priorities={priorities}
                    seriousness={seriousness}
                    validStatuses={validStatuses}
                    {...formProps}
                />
            )}
        </Form>
    )
};

export default TaskForm;