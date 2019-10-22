import React, { useState, useContext, useEffect, useCallback } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';

import { TaskFormContainer, TaskHistoryContainer } from '../index';
import { Loading } from '../../custom/Loading';
import { formatDate } from '../../utils/helpers';
import {
    withBoardContext,
    withAuthUserContext,
    BoardContext
} from '../../context';
import useStyles from './styles';
import { ROUTES } from '../../App';

const TaskDetail = (props) => {
    const {
        historyActions,
        history,
        match
    } = props;

    const [task, setTask] = useState(null);
    const [error, setError] = useState(null);
    const [tabValue, setTabValue] = useState(0);
    const [loading, setLoading] = useState(false);

    const boardContext = useContext(BoardContext);
    const classes = useStyles();

    const historyLength = task && task.history
        ? Object.keys(task.history).length : 0;

    const handleFormSubmit = (task, history) => {
        const { authUser } = props;
        setLoading(true);
        boardContext
            .onEdit(task)
            .then(() => {
                if (history && history.comment !== '') {
                    const historyData = Object.assign({}, {
                        date: (new Date()).toString(),
                        action: historyActions[task.status],
                        user: authUser.email
                    }, history);

                    // return another promise
                    // instead of callback hell
                    return boardContext
                        .onTaskHistoryCreate(task.id, historyData)
                }
            })
            .then(() => history.push(ROUTES.HOME))
            .catch(error => setError({ error }))
    };

    const handleTabChange = (event, value) => {
        setTabValue(value);
    };

    useEffect(() => {
        setLoading(true);
        boardContext
            .getTask(match.params.id)
            .then(
                task => {
                    setTask(task);
                    setLoading(false);
                },
                error => setError({ error })
            );

        return () => {
            props.firebase
                .task(match.params.id)
                .off();
        }
    }, []);

    return (
        <Container
            component="main"
            maxWidth="sm"
            fixed
            className={classes.container}
        >
            <AppBar position="static" color="default" elevation={0}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Task Info" />
                    <Tab
                        label={
                            <Badge
                                className={classes.tabBadge}
                                color="primary"
                                badgeContent={historyLength > 0
                                    ? historyLength
                                    : null
                                }
                            >Task History</Badge>
                        }
                    />
                </Tabs>
            </AppBar>
            <TabPanel value={tabValue} index={0} >
                <Card>
                    <CardHeader
                        title="Task info"
                        subheader={task && task.createdDate && `${formatDate(task.createdDate)}`}
                    />
                    <Divider />
                    <CardContent>
                        {task
                            ?
                            <TaskFormContainer
                                error={error}
                                task={task}
                                onSubmit={handleFormSubmit}
                            />
                            :
                            <Loading />
                        }
                    </CardContent>
                </Card>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                {task
                    ? <TaskHistoryContainer history={task.history} />
                    : <Loading />
                }
            </TabPanel>
        </Container>
    )
};

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            elevation={0}
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box pt={3}>{children}</Box>
        </Typography>
    );
};

export default compose(
    withBoardContext,
    withRouter,
    withAuthUserContext
)(TaskDetail);