import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { normalizedRoutes } from "../../../router";
import useStyles from "./styles";

const Header = props => {
    const { authUser, handleLogout } = props;

    const classes = useStyles();
    const history = useHistory();

    const changeLink = useCallback(
        target => () => {
            history.push(target);
        },
        [history]
    );

    const onLogout = useCallback(() => {
        handleLogout(history);
    }, [handleLogout, history]);

    return (
        <AppBar position="static" elevation={0}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Board
                </Typography>

                {authUser && (
                    <>
                        <Tooltip title="Add task">
                            <Fab
                                onClick={changeLink(
                                    normalizedRoutes.taskCreate
                                )}
                                aria-label="create"
                                className={classes.fab}
                                color="secondary"
                                size="small"
                            >
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                        <Tooltip title="Home page">
                            <IconButton
                                onClick={changeLink(normalizedRoutes.home)}
                                aria-label="home"
                                color="inherit"
                                className={classes.button}
                            >
                                <HomeIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Logout">
                            <IconButton
                                onClick={onLogout}
                                aria-label="logout"
                                color="inherit"
                                className={classes.button}
                            >
                                <ExitToAppIcon />
                            </IconButton>
                        </Tooltip>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
