import React from 'react';
import { useHistory } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Fab, Tooltip, IconButton } from '@material-ui/core';
import { Add, Home, ExitToApp } from '@material-ui/icons';

import useStyles from './styles'
import { ROUTES } from '../../App';

const Header = (props) => {
    const {
        authUser,
        handleLogout,
    } = props;

    const classes = useStyles();
    const history = useHistory();

    const changeLink = (target) => {
        history.push(target);
    };

    return (
        <AppBar position="static" elevation={0}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Board
                </Typography>

                {authUser && (<>
                    <Tooltip title="Add task">
                        <Fab
                            onClick={() => changeLink(ROUTES.CREATE_TASK)}
                            aria-label="create"
                            className={classes.fab}
                            color="secondary"
                            size="small"
                        >
                            <Add />
                        </Fab>
                    </Tooltip>
                    <Tooltip title="Home page">
                        <IconButton
                            onClick={() => changeLink(ROUTES.HOME)}
                            aria-label="home"
                            color="inherit"
                            className={classes.button}
                        >
                            <Home />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Logout">
                        <IconButton
                            onClick={() => handleLogout(history)}
                            aria-label="logout"
                            color="inherit"
                            className={classes.button}
                        >
                            <ExitToApp />
                        </IconButton>
                    </Tooltip>
                </>)}
            </Toolbar>
        </AppBar>
    )
};

export default Header;
