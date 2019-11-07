import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    buttonsContainer: {
        padding: '8px 0',
    },
    buttons: {
        marginLeft: 'auto',
        '& button:last-child': {
            marginLeft: '8px',
        },
    },
}));
