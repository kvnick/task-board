import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        height: "calc(100% - 64px - 115px)"
    },
    "@global": {
        "html, body, #root": {
            height: "100%"
        }
    },
    paper: {
        backgroundColor: theme.palette.grey[300],
        padding: theme.spacing(2),
        maxHeight: "100%",
        height: "100%",
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(1)
        }
    },
    container: {
        height: "100%",
        overflow: "hidden",
        [theme.breakpoints.down("xs")]: {
            height: "auto",
            overflow: "auto"
        }
    },
    gridContainer: {
        marginTop: 1,
        height: "100%",
        transform: "translateZ(0)",
        flexWrap: "nowrap",
        overflowY: "auto",
        [theme.breakpoints.down("xs")]: {
            overflowY: "auto",
            flexWrap: "wrap"
        }
    },
    item: {
        height: "100%",
        minWidth: 300,
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            height: "auto"
        }
    },
    tasksWrapper: {
        height: "calc(100% - 28px)",
        maxHeight: "100%",
        overflowY: "auto",
        [theme.breakpoints.down("xs")]: {
            height: "auto"
        }
    },
    title: {
        textTransform: "capitalize",
        fontWeight: "bold"
    },
    titleCount: {
        color: theme.palette.text.secondary
    }
}));
