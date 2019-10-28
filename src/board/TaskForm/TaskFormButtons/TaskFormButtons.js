import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

const TaskFormButtons = (props) => {
    const {
        disabled,
        onCancel,
        onDelete,
        submitButton
    } = props;

    const classes = useStyles();

    return (
        <Grid
            container
            justify="space-between"
            className={classes.buttonsContainer}
        >
            {onDelete && (
                <Button
                    onClick={onDelete}
                    type="button"
                    color="secondary"
                >
                    Delete
                </Button>
            )}

            <div className={classes.buttons}>
                <Button
                    onClick={onCancel}
                    type="button"
                    color="default"
                >
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
    )
};

export default TaskFormButtons;