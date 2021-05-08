import React from 'react'
import classNames from 'classnames'

import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'

import useStyles from './styles'

function Loading({ fixed }) {
  const classes = useStyles()

  return (
    <Paper
      elevation={0}
      className={classNames(classes.progress, {
        [classes.loading]: fixed,
      })}
    >
      <CircularProgress />
    </Paper>
  )
}

export default Loading
