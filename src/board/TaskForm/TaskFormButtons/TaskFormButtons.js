import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

const TaskFormButtons = props => {
    const { disabled, onCancel, submitButton } = props;

    const classes = useStyles();

    return (
        <Grid
            container
            justify="space-between"
            className={classes.buttonsContainer}
        >
            <div className={classes.buttons}>
                <Button onClick={onCancel} type="button" color="default">
                    Cancel
                </Button>
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    disabled={disabled}
                >
                    {submitButton}
                </Button>
            </div>
        </Grid>
    );
};

export default TaskFormButtons;
