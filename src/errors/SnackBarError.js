import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { Close } from '@material-ui/icons';

const styles = theme => ({
    snackbar: {
        error: {
            backgroundColor: 'red'
        }
    }
});

class SnackBarError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.error != null
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.error !== prevProps.error) {
            this.setState({
                open: true
            });
        }
    }

    handleClose = event => {
        this.setState({
            open: false
        });
    };

    render() {
        const { open } = this.state,
            { classes, error } = this.props;

        return (
            <>
                {error && (
                    <Snackbar
                        className={classes.snackbar.error}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                        }}
                        open={open}
                        ContentProps={{
                            'aria-describedby': 'message-id'
                        }}
                        message={
                            <span id="message-id">{error.toString()}</span>
                        }
                        action={[
                            <IconButton
                                key="close"
                                aria-label="close"
                                color="inherit"
                                className={classes.close}
                                onClick={this.handleClose}
                            >
                                <Close />
                            </IconButton>
                        ]}
                    />
                )}
            </>
        );
    }
}

export default withStyles(styles)(SnackBarError);
