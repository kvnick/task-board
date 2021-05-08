import React from 'react'

import { Card, CardContent } from '@material-ui/core'

import TaskHistoryItem from '../TaskHistoryItem'

function TaskHistory({ history: taskHistory }) {
  if (!taskHistory.length) {
    return (
      <Card>
        <CardContent>No task history... yet</CardContent>
      </Card>
    )
  }

  return (
    <>
      {taskHistory.map((item) => (
        <TaskHistoryItem key={item.id} item={item} />
      ))}
    </>
  )
}

export default TaskHistory
