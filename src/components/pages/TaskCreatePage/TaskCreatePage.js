import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";

import { ROUTES } from "../../../App";
import TaskFormContainer from "../../organisms/TaskForm/TaskFormContainer";
import Page from "../../organisms/Page";
import Loading from "../../molecules/Loading";
import useStyles from "./styles";

const TaskCreatePage = props => {
    const { error, loading, onSubmit } = props;
    const classes = useStyles();
    const history = useHistory();
    const onCancel = useCallback(() => history.push(ROUTES.TASKS_PAGE), [
        history
    ]);

    const renderCardContent = () => {
        if (loading) {
            return <Loading />;
        }

        return (
            <TaskFormContainer
                error={error}
                onSubmit={onSubmit}
                onCancel={onCancel}
            />
        );
    };

    return (
        <Page>
            <Container
                fixed
                component="main"
                maxWidth="sm"
                className={classes.container}
            >
                <Card>
                    <CardHeader title="Create a new task" />
                    <Divider />
                    <CardContent>{renderCardContent()}</CardContent>
                </Card>
            </Container>
        </Page>
    );
};

export default TaskCreatePage;
