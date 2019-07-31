import React, { Component } from 'react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { withBoardContext } from '../../context';
import { SnackBarError } from '../errors';
import { TaskItem } from './';
import {
  Grid, Paper, Typography, Container
} from '@material-ui/core';

const styles = theme => ({
  root: {
    height: 'calc(100% - 64px - 115px)',
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  paper: {
    backgroundColor: theme.palette.grey[300],
    padding: theme.spacing(2),
    maxHeight: '100%',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1)
    }
  },
  container: {
    height: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      overflow: 'auto'
    }
  },
  gridContainer: {
    marginTop: 1,
    height: '100%',
    transform: 'translateZ(0)',
    flexWrap: 'nowrap',
    overflowY: 'auto',
    [theme.breakpoints.down('xs')]: {
      overflowY: 'auto',
      flexWrap: 'wrap',
    }
  },
  item: {
    height: '100%',
    minWidth: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: 'auto'
    }
  },
  tasksWrapper: {
    height: 'calc(100% - 28px)',
    maxHeight: '100%',
    overflowY: 'auto',
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    }
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: 'bold'
  },
  titleCount: {
    color: theme.palette.text.secondary
  }
});

class StatusList extends Component {
  render() {
    const {
      classes,
      tasksByStatuses,
      tasksError
    } = this.props;

    return (
      <main className={classes.root}>
        <Container fixed maxWidth="lg" className={classes.container}>
          <Grid container alignItems="stretch" spacing={1} className={classes.gridContainer}>
            {tasksByStatuses.map(([status, tasks]) => (
              <Grid key={status} className={classes.item} item>
                <Paper elevation={0} className={classes.paper}>
                  <Typography gutterBottom component="h2" variant="subtitle1" className={classes.title}>
                    {status} <span className={classes.titleCount}>{tasks.length > 0 && `(${tasks.length})`}</span>
                  </Typography>
                  <div className={classes.tasksWrapper}>
                    {tasks.map(task =>
                      <TaskItem key={task.id} task={task} />
                    )}
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
        {tasksError &&
          <SnackBarError error={tasksError} />
        }
      </main>
    )
  }
}

export default compose(
  withStyles(styles),
  withBoardContext
)(StatusList)