import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';

import { TaskFormContainer } from './';
import {
    withBoardContext,
    withAuthUserContext
} from '../context';
import { Loading } from '../custom/Loading';
import { ROUTES } from '../App';

const useStyles = makeStyles(theme => ({
    container: {
        margin: '30px auto'
    }
}));

const TaskCreate = (props) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    const handleFormSubmit = task => {
        const { authUser } = props;

        task = Object.assign({}, task, {
            createdDate: (new Date()).toString(),
            status: 'new',
            user: authUser.email
        });

        setLoading(true);

        props.onCreate(task)
            .then(() => props.history.push(ROUTES.HOME))
            .catch(error => setError(error) && setLoading(false))
    };

    const renderCardContent = () => {
        const { loading } = props;

        if (loading) {
            return <Loading />;
        }

        return (
            <TaskFormContainer
                error={error}
                onSubmit={handleFormSubmit}
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
                <CardContent>
                    {renderCardContent}
                </CardContent>
            </Card>
        </Container>
    )
};

export default compose(
    withRouter,
    withBoardContext,
    withAuthUserContext
)(TaskCreate);