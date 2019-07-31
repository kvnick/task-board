import React, { Component } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
    withBoardContext,
    withFirebaseContext,
    withAuthUserContext
} from '../../context';
import {
  AppBar, Toolbar, Typography, Fab,
  Tooltip, IconButton
} from '@material-ui/core';
import {
  Add, Home, ExitToApp
} from '@material-ui/icons';

const styles = (theme) => ({
  title: {
    flexGrow: 1
  },
  fab: {
    margin: theme.spacing(1),
  },
  button: {

  }
});

class Header extends Component {
  changeLink(path) {
    this.props.history.push(path);
  }

  handleLogout() {
    const { firebase, history } = this.props;

    firebase.handleSignOut();
    history.push('/login');
  }

  render() {
    const {
      classes,
      authUser
    } = this.props;

    return (
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Board
          </Typography>
          {authUser !== null &&
           <>
              <Tooltip title="Add task">
                <Fab onClick={() => this.changeLink('/create')} aria-label="create" className={classes.fab} color="secondary" size="small">
                  <Add />
                </Fab>
              </Tooltip>
              <Tooltip title="Home page">
                <IconButton onClick={() => this.changeLink('/')} aria-label="delete" color="inherit" className={classes.button}>
                  <Home />
                </IconButton>
              </Tooltip>
              <Tooltip title="Logout">
                <IconButton onClick={() => this.handleLogout()} aria-label="logout" color="inherit" className={classes.button}>
                  <ExitToApp />
                </IconButton>
              </Tooltip>
            </>
          }
        </Toolbar>
      </AppBar>
    )
  }
}

export default compose(
  withStyles(styles),
  withFirebaseContext,
  withBoardContext,
  withRouter,
  withAuthUserContext,
)(Header);