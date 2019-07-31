import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { formatDate } from '../../helpers';
import {
  Card, CardHeader, CardContent, Divider,
  Avatar, Typography
} from '@material-ui/core'

const styles = theme => ({
  root: {
    '&:not(:last-child)': {
      marginBottom: 10
    },
  },
  avatar: {
    backgroundColor: theme.palette.error.dark
  }
});

class TaskHistoryItem extends Component {
  render() {
    const { item, classes } = this.props;

    return (
      <Card key={item.date} className={classes.root}>
        <CardHeader
          titleTypographyProps={{variant:'subtitle1' }}
          subheaderTypographyProps={{variant: 'subtitle2' }}
          avatar={item.user &&
            <Avatar size="small" className={classes.avatar}>
              {item.user.substr(0, 2)}
            </Avatar>
          }
          title={item.user}
          subheader={item.date && formatDate(item.date)}
        />
        <Divider />
        <CardContent>
          <Typography>
            <b>{item.action}</b>
          </Typography>
          {item.comment &&
          <Typography>
            {item.comment}
          </Typography>
          }
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskHistoryItem);
