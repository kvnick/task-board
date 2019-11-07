import React from 'react';
import { useHistory } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';

import { ROUTES } from '../../App';
import TaskFormContainer from '../TaskForm/TaskFormContainer';
import { Loading } from '../../custom/Loading';
import useStyles from './styles';

const TaskCreate = props => {
    const { error, loading, onSubmit } = props;

    const classes = useStyles();

    const history = useHistory();
    const onCancel = () => history.push(ROUTES.TASKS_PAGE);

    const renderCardContent = () => {
        if (loading) {
            return <Loading />;
        }

        return (
            <TaskFormContainer
                error={error}
                onSubmit={onSubmit}
                onCancel={onCancel}
            />
        );
    };

    return (
        <Container
            fixed
            component="main"
            maxWidth="sm"
            className={classes.container}
        >
            <Card>
                <CardHeader title="Create a new task" />
                <Divider />
                <CardContent>{renderCardContent()}</CardContent>
            </Card>
        </Container>
    );
};

export default TaskCreate;
