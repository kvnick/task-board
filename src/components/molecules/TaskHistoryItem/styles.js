import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
    root: {
        "&:not(:last-child)": {
            marginBottom: 10,
        },
    },
    avatar: {
        backgroundColor: theme.palette.error.dark,
    },
}));
