import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { withFirebaseContext, withAuthUserContext } from '../../context';
import { SnackBarError } from '../errors';
import {
  Container, Typography, TextField, Button,
  CircularProgress
} from '@material-ui/core';
import { ROUTES } from '../../helpers';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  snackbar: {
    error: {
      backgroundColor: theme.palette.error.dark,
    }
  },
  progress: {

  },
  progressWrapper: {
    minHeight: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class Login extends Component {
  state = this.getInitState();

  getInitState() {
    return {
      email: '',
      password: '',
      error: null,
      loading: false
    }
  }

  componentDiMount() {
    // ??? is the best way ???
    this.checkUser();
  }

  componentDidUpdate(prevProps) {
    // ??? is the best way ???
    if (prevProps.authUser !== this.props.authUser) {
      this.checkUser();
    }
  }

  checkUser() {
    const { authUser } = this.props;
    if (authUser) {
      this.props.history.push(ROUTES.HOME);
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    // enable loading
    this.setState({
      loading: true
    });

    this.props.firebase.doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState(this.getInitState());
        this.props.history.push('/');
      })
      .catch(error => {
        // todo:
        // firebase return error code for each error type
        this.setState({
          password: '',
          error,
          loading: false
        });
      });
  }

  handleChange = ({ target: { name, value }}) =>
    this.setState({
      [name]: value
    })

  render() {
    const { classes } = this.props,
      { email, password, error, loading } = this.state,
      isInvalid = email === '' || password === '';

    return (
      <Container component="main" maxWidth="xs">
        {! loading
          ?
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">Sign in</Typography>
              <form onSubmit={this.handleSubmit} className={classes.form}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={isInvalid}
                >
                  Sign In
                </Button>

                { error &&
                  <SnackBarError error={error} />
                }
              </form>
            </div>
          :
            <div className={classes.progressWrapper}>
              <CircularProgress className={classes.progress} />
            </div>
         }
      </Container>
    )
  }
}

export default compose(
  withStyles(styles),
  withRouter,
  withFirebaseContext,
  withAuthUserContext,
)(Login);