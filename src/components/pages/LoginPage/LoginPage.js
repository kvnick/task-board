import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import Page from "../../organisms/Page";
import LoginFormContainer from "../../organisms/LoginForm";
import useStyles from "./styles";

const LoginPage = ({ loading }) => {
    const classes = useStyles();

    return (
        <Page>
            <Container component="div" maxWidth="xs">
                {!loading ? (
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>

                        <LoginFormContainer />
                    </div>
                ) : (
                    <div className={classes.progressWrapper}>
                        <CircularProgress className={classes.progress} />
                    </div>
                )}
            </Container>
        </Page>
    );
};

export default LoginPage;
