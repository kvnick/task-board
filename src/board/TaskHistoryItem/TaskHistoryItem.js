import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import styles from './styles';
import { formatDate } from "../../utils/helpers";

const TaskHistoryItem = (props) => {
  const { classes, item } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        titleTypographyProps={{ variant:'subtitle1' }}
        subheaderTypographyProps={{ variant: 'subtitle2' }}
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
};

export default withStyles(styles)(TaskHistoryItem);
