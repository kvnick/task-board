import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => ({
    container: {
        margin: '30px auto',
    },
    tabBadge: {
        padding: theme.spacing(0, 2),
    },
    avatar: {
        backgroundColor: theme.palette.error.dark,
    },
}));
