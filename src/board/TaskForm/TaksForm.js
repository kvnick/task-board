import React from 'react';
import { Form } from 'react-final-form';

import { Loading } from '../../custom/Loading';
import TaskFormRender from './TaskFormRender/TaskFormRender';

const TaskForm = (props) => {
    const {
        loading,
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

    const validStatuses = getValidStatuses(task ? task.status : []);
    const subscription = {
        pristine: true,
        values: true,
        initialValues: true
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <Form
            initialValues={task}
            onSubmit={onSubmit}
            subscription={subscription}
        >
            {formProps => (
                <TaskFormRender
                    onCancel={onCancel}
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