import React, { Component } from 'react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { TaskHistoryItem } from './';
import { Card, CardContent } from '@material-ui/core'
import { withBoardContext } from '../../context';

const styles = theme => ({
  root: {
  }
});

class TaskHistory extends Component {
  render() {
    const { history, classes } = this.props;

    if (! history) {
      return (
        <Card>
          <CardContent>
            No task history... yet
          </CardContent>
        </Card>
      )
    }

    const historyItems = Object.entries(history).reduce((items, item) => {
      const [id, history] = item;
      items.push({ ...history, id: id });
      return items;
    }, []);

    return (
      <div className={classes.root}>
        {historyItems.map(historyItem =>
          <TaskHistoryItem key={historyItem.id} item={historyItem} />
        )}
      </div>
    )
  }
}

export default compose(
  withBoardContext, withStyles(styles)
)(TaskHistory);