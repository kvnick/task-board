import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
    form: {
        margin: 0,
    },
    formControl: {
        minWidth: 220,
        "&:not(:last-child)": {
            marginBottom: 15,
        },
    },
    buttonFormControl: {
        marginTop: 20,
    },
    snackbar: {
        error: {
            backgroundColor: theme.palette.danger,
        },
    },
}));
