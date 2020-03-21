import React from "react";
import { Card, CardContent } from "@material-ui/core";
import TaskHistoryItem from "../molecules/TaskHistoryItem";

const TaskHistory = props => {
    const { history } = props;

    if (!history.length) {
        return (
            <Card>
                <CardContent>No task history... yet</CardContent>
            </Card>
        );
    }

    return (
        <>
            {history.map(item => (
                <TaskHistoryItem key={item.id} item={item} />
            ))}
        </>
    );
};

export default TaskHistory;
