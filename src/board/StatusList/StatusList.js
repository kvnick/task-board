import React, { useEffect } from 'react';

import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';

import { SnackBarError } from '../../errors';
import { TaskItem } from '../index';
import { Loading } from '../../custom/Loading';
import useStyles from './styles';

const StatusList = props => {
    const { tasks, error, loading, fetchTasks } = props;

    const classes = useStyles();

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const renderTasks = (tasks, status) => (
        <Paper elevation={0} className={classes.paper}>
            <Typography
                gutterBottom
                component="h2"
                variant="subtitle1"
                className={classes.title}
            >
                {status}

                <span className={classes.titleCount}>
                    {tasks.length > 0 && `(${tasks.length})`}
                </span>
            </Typography>

            <div className={classes.tasksWrapper}>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
        </Paper>
    );

    return (
        <main className={classes.root}>
            {!loading ? (
                <>
                    <Container
                        fixed
                        maxWidth="lg"
                        className={classes.container}
                    >
                        <Grid
                            container
                            alignItems="stretch"
                            wrap="nowrap"
                            spacing={1}
                            className={classes.gridContainer}
                        >
                            {tasks.map(([status, tasks]) => (
                                <Grid
                                    item
                                    key={status}
                                    className={classes.item}
                                >
                                    {renderTasks(tasks, status)}
                                </Grid>
                            ))}
                        </Grid>
                    </Container>

                    {error && <SnackBarError error={error} />}
                </>
            ) : (
                <Loading />
            )}
        </main>
    );
};

export default StatusList;
