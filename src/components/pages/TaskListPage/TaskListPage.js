import React from 'react'

import { Grid } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Container } from '@material-ui/core'

import TaskItem from '../../molecules/TaskItem'
import Page from '../../organisms/Page'
import useStyles from './styles'

const TaskListPage = ({ tasks, error }) => {
  const classes = useStyles()

  const renderTasks = (tasks, status) => (
    <Paper elevation={0} className={classes.paper}>
      <Typography
        gutterBottom
        component="h2"
        variant="subtitle1"
        className={classes.title}
      >
        <span className={classes.titleText}>{status}</span>
        {tasks.length > 0 && (
          <span className={classes.titleCount}>{tasks.length}</span>
        )}
      </Typography>

      <div className={classes.tasksWrapper}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </Paper>
  )

  return (
    <Page
      classes={{
        main: classes.root,
      }}
    >
      <Container fixed maxWidth="lg" className={classes.container}>
        <Grid
          container
          alignItems="stretch"
          wrap="nowrap"
          spacing={1}
          className={classes.gridContainer}
        >
          {tasks.map(([status, tasks]) => (
            <Grid item key={status} className={classes.item}>
              {renderTasks(tasks, status)}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  )
}

export default TaskListPage
