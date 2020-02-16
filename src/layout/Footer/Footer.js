import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Footer = props => {
    const { authUser } = props;

    const classes = useStyles();
    const greeting = authUser ? `Hello, ${authUser.email}` : 'Footer';
    const madeBy = 'Made with love by nkorostelev';

    return (
        <footer className={classes.footer}>
            <Container fixed maxWidth="xl">
                <Typography variant="h6" align="center" gutterBottom>
                    {greeting}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    {madeBy}
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
