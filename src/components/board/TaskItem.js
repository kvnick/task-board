import React, { Component } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { withBoardContext } from '../../context';
import { formatDate } from '../../helpers';
import {
  Card, CardActionArea, CardContent, CardActions, CardHeader,
  Typography, Chip, Avatar, Divider
} from '@material-ui/core';

const styles = theme => ({
  root: {
    '&:not(:last-child)': {
      marginBottom: 10
    }
  },
  name: {
    textTransform: 'capitalize'
  },
  chip: {
    marginRight: theme.spacing(1),
  },
  avatar: {
    backgroundColor: theme.palette.error.dark
  }
});

class TaskItem extends Component {
  handleClick(id) {
    this.props.history.push(`/${id}`);
  }

  render() {
    const { classes, task } = this.props;

    return (
      <Card className={classes.root} elevation={0}>
        <CardActionArea onClick={() => this.handleClick(task.id)}>
          <CardHeader
            titleTypographyProps={{variant:'subtitle1' }}
            subheaderTypographyProps={{variant: 'subtitle2' }}
            avatar={task.user &&
              <Avatar size="small" className={classes.avatar}>
                {task.user.substr(0, 2)}
              </Avatar>
            }
            title={task.name}
            subheader={task.createdDate && formatDate(task.createdDate)}
          />
          <Divider />
          <CardContent>
            {task.previewText &&
              <Typography variant="body2" component="p">
                {task.previewText}
              </Typography>
            }
          </CardContent>
          {(task.priority || task.serious || task.user) &&
            <CardActions>
              <div>
                {task.priority &&
                  <Chip size="small" color="secondary" className={classes.chip} label={task.priority} />
                }
                {task.serious &&
                  <Chip size="small" color="primary" className={classes.chip} label={task.serious} />
                }
              </div>
            </CardActions>
          }
        </CardActionArea>
      </Card>
    )
  }
}

export default compose(
  withStyles(styles),
  withBoardContext,
  withRouter
)(TaskItem);