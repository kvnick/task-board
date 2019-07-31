import React, { Component } from 'react';
import { Form } from './';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { ROUTES } from '../../helpers';
import { Loading } from '../custom';
import {
  Container, Card, CardContent, CardHeader, Divider
} from '@material-ui/core';
import {
  withBoardContext, withAuthUserContext
} from '../../context';

const styles = theme => ({
  container: {
    margin: '30px auto'
  }
});

class TaskCreate extends Component {
  state = {
    error: null,
    loading: false
  }

  handleFormSubmit = task => {
    const { authUser } = this.props;

    task = Object.assign({}, task, {
      createdDate: (new Date()).toString(),
      status: 'new',
      user: authUser.email
    });

    this.setState({loading: true})

    this.props.onCreate(task)
      .then(() =>
        this.props.history.push(ROUTES.HOME)
      )
      .catch(error =>
        this.setState({error, loading: false})
      )
  }

  render() {
    const {
      classes,
      statuses,
      priorities,
      seriousness,
    } = this.props;

    const { loading } = this.state;

    return (
      <Container component="main" maxWidth="sm" fixed className={classes.container}>
        <Card>
          <CardHeader
            title="Create a new task"
          />
          <Divider />
          <CardContent>
            {! loading
              ?
                <Form
                  error={this.state.error}
                  statuses={statuses}
                  priorities={priorities}
                  seriousness={seriousness}
                  onSubmit={this.handleFormSubmit}
                />
              :
                <Loading />
            }
          </CardContent>
        </Card>
      </Container>
    )
  }
}

export default compose(
  withRouter,
  withStyles(styles),
  withBoardContext,
  withAuthUserContext
)(TaskCreate);