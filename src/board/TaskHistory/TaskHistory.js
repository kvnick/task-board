import React from 'react';
import { compose } from 'recompose';

import { Card, CardContent } from '@material-ui/core'

import { withBoardContext } from '../../context';
import { TaskHistoryItem } from '../index';

const TaskHistory = (props) => {
  const { history } = props;

  if (! history) {
    return (
      <Card>
        <CardContent>
          No task history... yet
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      {history.map(historyItem =>
        <TaskHistoryItem key={historyItem.id} item={historyItem} />
      )}
    </>
  )
}

export default compose(withBoardContext)(TaskHistory);