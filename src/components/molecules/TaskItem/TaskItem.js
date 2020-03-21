import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { ROUTES } from "../../../App";
import { formatDate } from "../../../services/utils/helpers";
import useStyles from "./styles";

const TaskItem = props => {
    const { task } = props;

    const classes = useStyles();
    const history = useHistory();

    const handleClick = useCallback(() => {
        history.push(ROUTES.PREVIEW_TASK.replace(":id", task.id));
    }, [history, task.id]);

    return (
        <Card className={classes.root} elevation={0}>
            <CardActionArea onClick={handleClick}>
                <CardHeader
                    titleTypographyProps={{ variant: "subtitle1" }}
                    subheaderTypographyProps={{ variant: "subtitle2" }}
                    avatar={
                        task.user && (
                            <Avatar size="small" className={classes.avatar}>
                                {task.user.substr(0, 2)}
                            </Avatar>
                        )
                    }
                    title={task.name}
                    subheader={task.createdDate && formatDate(task.createdDate)}
                />
                <Divider />
                <CardContent>
                    {task.previewText && (
                        <Typography variant="body2" component="p">
                            {task.previewText}
                        </Typography>
                    )}
                </CardContent>
                {(task.priority || task.serious || task.user) && (
                    <CardActions>
                        <div>
                            {task.priority && (
                                <Chip
                                    size="small"
                                    color="secondary"
                                    className={classes.chip}
                                    label={task.priority}
                                />
                            )}
                            {task.serious && (
                                <Chip
                                    size="small"
                                    color="primary"
                                    className={classes.chip}
                                    label={task.serious}
                                />
                            )}
                        </div>
                    </CardActions>
                )}
            </CardActionArea>
        </Card>
    );
};

export default TaskItem;
