import React, { useState, useEffect, useCallback } from "react";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { Close } from "@material-ui/icons";

import useStyles from "./styles";

const SnackBarError = ({ error }) => {
    const classes = useStyles();
    const [isSnackBarOpen, setSnackBarOpen] = useState(error !== null);

    useEffect(() => {
        if (error) {
            setSnackBarOpen(error);
        }
    }, [error]);

    const handleClose = useCallback(event => {
        setSnackBarOpen(false);
    }, []);

    return (
        <>
            {error && (
                <Snackbar
                    className={classes.snackbar.error}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                    open={isSnackBarOpen}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    message={<span id="message-id">{error.toString()}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            className={classes.close}
                            onClick={handleClose}
                        >
                            <Close />
                        </IconButton>
                    ]}
                />
            )}
        </>
    );
};

export default SnackBarError;
