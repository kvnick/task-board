import React from 'react';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';

const Loading = props => {
    const classes = useStyles();

    return (
        <Paper elevation={0} className={classes.progress}>
            <CircularProgress />
        </Paper>
    );
};

export default Loading;
