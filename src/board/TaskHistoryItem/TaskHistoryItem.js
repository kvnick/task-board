import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { formatDate } from '../../utils/helpers';
import useStyles from './styles';

const TaskHistoryItem = props => {
    const { item } = props;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title={item.user}
                subheader={item.date && formatDate(item.date)}
                avatar={
                    item.user && (
                        <Avatar size="small" className={classes.avatar}>
                            {item.user.substr(0, 2)}
                        </Avatar>
                    )
                }
            />

            <Divider />

            <CardContent>
                <Typography>
                    <b>{item.action}</b>
                </Typography>

                {item.comment && <Typography>{item.comment}</Typography>}
            </CardContent>
        </Card>
    );
};

export default TaskHistoryItem;
