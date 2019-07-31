import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, CircularProgress } from '@material-ui/core';

const styles = theme => ({
  progress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    textAlign: 'center'
  },
});

class Loading extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={0} className={classes.progress}>
        <CircularProgress />
      </Paper>
    );
  }
}

export default withStyles(styles)(Loading);
