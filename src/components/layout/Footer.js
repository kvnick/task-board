import React, { Component } from 'react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { withAuthUserContext } from '../../context';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0),
  }
});

class Footer extends Component {
  render() {
    const { classes, authUser } = this.props;

    return (
      <footer className={classes.footer}>
        <Container fixed maxWidth="xl">
          <Typography variant="h6" align="center" gutterBottom>
            {authUser
              ? `Hello, ${authUser.email}`
              : 'Footer'
            }
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Made with love by nkorostelev
          </Typography>
        </Container>
      </footer>
    )
  }
}

export default compose(
  withStyles(styles),
  withAuthUserContext
)(Footer);