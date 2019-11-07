import React, { useState, useEffect, useCallback } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';

import { ROUTES } from '../../App';
import { TaskFormContainer, TaskHistoryContainer } from '../index';
import { Loading } from '../../custom/Loading';
import { formatDate } from '../../utils/helpers';
import useStyles from './styles';

const TaskDetail = props => {
    const { task, error, fetchTask, onSubmit, onDelete } = props;

    const [tabValue, setTabValue] = useState(0);
    const [classes, match] = [useStyles(), useRouteMatch()];
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const history = useHistory();

    const handleDelete = task && task.id ? () => onDelete(task.id) : null;
    const historyLength =
        task && task.history ? Object.keys(task.history).length : 0;
    const handleMenuClose = () => setAnchorEl(null);
    const handleMenuOpen = () =>
        setAnchorEl(document.getElementById('simple-menu-button'));
    const onCancel = () => history.push(ROUTES.TASKS_PAGE);
    const handleTabChange = useCallback(
        (event, value) => setTabValue(value),
        []
    );

    useEffect(() => {
        fetchTask(match.params.id);
    }, [fetchTask, match.params.id]);

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
                                badgeContent={
                                    historyLength > 0 ? historyLength : null
                                }
                            >
                                Task History
                            </Badge>
                        }
                    />
                </Tabs>
            </AppBar>
            <TabPanel value={tabValue} index={0}>
                <Card>
                    <CardHeader
                        title="Task info"
                        subheader={
                            task &&
                            task.createdDate &&
                            `${formatDate(task.createdDate)}`
                        }
                        avatar={
                            task &&
                            task.user && (
                                <Avatar size="small" className={classes.avatar}>
                                    {task.user.substr(0, 2)}
                                </Avatar>
                            )
                        }
                        action={
                            task && (
                                <>
                                    <IconButton
                                        id="simple-menu-button"
                                        onClick={handleMenuOpen}
                                        aria-label="settings"
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        anchorEl={anchorEl}
                                        id="simple-menu"
                                        keepMounted
                                        open={open}
                                        onClose={handleMenuClose}
                                    >
                                        <MenuItem onClick={handleDelete}>
                                            <ListItemIcon>
                                                <DeleteIcon fontSize="small" />
                                            </ListItemIcon>
                                            <Typography variant="inherit">
                                                Delete
                                            </Typography>
                                        </MenuItem>
                                    </Menu>
                                </>
                            )
                        }
                    />
                    <Divider />
                    <CardContent>
                        {task ? (
                            <TaskFormContainer
                                error={error}
                                task={task}
                                onSubmit={onSubmit}
                                onCancel={onCancel}
                            />
                        ) : (
                            <Loading />
                        )}
                    </CardContent>
                </Card>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                {task ? (
                    <TaskHistoryContainer history={task.history} />
                ) : (
                    <Loading />
                )}
            </TabPanel>
        </Container>
    );
};

const TabPanel = props => {
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

export default TaskDetail;
