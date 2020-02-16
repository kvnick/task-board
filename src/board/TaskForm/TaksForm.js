import React, { useState, useCallback } from 'react';
import { Form } from 'react-final-form';

import { Loading } from '../../custom/Loading';
import TaskFormRender from './TaskFormRender/TaskFormRender';
import getFinalFormValidation from '../../utils/Validation/yup/getFinalFormValidation';
import taskFormSchema from '../../utils/Validation/yup/TaskForm/taskFormSchema';

const TaskForm = props => {
    const {
        loading,
        statuses,
        priorities,
        seriousness,
        statusesLife,
        onSubmit,
        onCancel,
        task,
    } = props;

    const [statusChanged, setStatusChanged] = useState(null);

    const getValidStatuses = useCallback(
        initialStatus => {
            const validStatuses = statusesLife.reduce(
                (validStatuses, statusLive) => {
                    const [status, toStatuses] = statusLive;
                    validStatuses[status] = toStatuses;
                    return validStatuses;
                },
                {}
            );

            return validStatuses[initialStatus]
                ? [...validStatuses[initialStatus], initialStatus]
                : statuses;
        },
        [statusesLife, statuses]
    );

    const validStatuses = getValidStatuses(task ? task.status : []);

    const subscription = {
        pristine: true,
        values: true,
        initialValues: true,
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <Form
            initialValues={task}
            onSubmit={onSubmit}
            subscription={subscription}
            validate={getFinalFormValidation(taskFormSchema, {
                abortEarly: false,
                context: {
                    statusChanged: statusChanged,
                },
            })}
        >
            {formProps => (
                <TaskFormRender
                    onCancel={onCancel}
                    statuses={statuses}
                    priorities={priorities}
                    seriousness={seriousness}
                    validStatuses={validStatuses}
                    setStatusChanged={setStatusChanged}
                    {...formProps}
                />
            )}
        </Form>
    );
};

export default TaskForm;
