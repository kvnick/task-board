import React, { Component } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { formatDate, ROUTES } from '../../helpers';
import { withStyles } from '@material-ui/core/styles';
import { Form, TaskHistory } from './';
import { Loading } from '../custom';
import {
  Container, Card, CardContent, CardHeader, Divider,
  AppBar, Typography, Tab, Tabs, Box, Badge
} from '@material-ui/core';
import {
    withBoardContext, withFirebaseContext, withAuthUserContext
} from '../../context';

const styles = theme => ({
  container: {
    margin: '30px auto'
  },
  tabBadge: {
    padding: theme.spacing(0, 2),
  }
});

class TaskDetail extends Component {
  state = {
    task: null,
    error: null,
    tabValue: 0
  }

  handleFormSubmit = (task, history) => {
    const { authUser, historyActions } = this.props;
    this.props
      .onEdit(task)
      .then(() =>  {
        if (history && history.comment !== '') {
          const historyData = Object.assign({}, {
            date: (new Date()).toString(),
            action: historyActions[task.status],
            user: authUser.email
          }, history);

          // return another promise
          // instaead of callback hell
          return this.props
            .onTaskHistoryCreate(task.id, historyData)
        }
      })
      .then(() =>
        this.props.history.push(ROUTES.HOME)
      )
      .catch(error =>
          this.setState({error})
      )
  }

  handleTabChange = (event, newValue) => {
    this.setState({
      tabValue: newValue
    });
  }

  componentDidMount() {
    this.props
      .getTask(this.props.match.params.id)
      .then(
        task => this.setState({task: task, loading: false}),
        error => this.setState({error})
      );
  }

  componentWillUnmount() {
    this.props.firebase
      .task(this.props.match.params.id)
      .off();
  }

  render() {
    const {
      classes,
      statuses,
      priorities,
      seriousness,
      globalError,
    } = this.props;

    const {
      task,
      tabValue
    } = this.state;

    const historyLength = task && task.history
      ? Object.keys(task.history).length : 0;

    return (
      <Container component="main" maxWidth="sm" fixed className={classes.container}>
          <AppBar position="static" color="default" elevation={0}>
            <Tabs
              value={tabValue}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Task Info" />
              <Tab
                label={
                  <Badge
                    className={classes.tabBadge}
                    color="primary"
                    badgeContent={historyLength > 0
                      ? historyLength
                      : null
                    }
                  >Task History</Badge>
                }
              />
            </Tabs>
          </AppBar>
          <TabPanel value={tabValue} index={0} >
            <Card>
              <CardHeader
                title="Task info"
                subheader={task && task.createdDate && `${formatDate(task.createdDate)}`}
              />
              <Divider />
              <CardContent>
                {task
                  ?
                    <Form
                      error={globalError}
                      task={task}
                      onSubmit={this.handleFormSubmit}
                      statuses={statuses}
                      priorities={priorities}
                      seriousness={seriousness}
                    />
                  :
                    <Loading />
                }
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value={tabValue} index={1} >
            {task
              ? <TaskHistory history={task.history} />
              : <Loading />
            }
          </TabPanel>
      </Container>
    )
  }
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      elevation={0}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box pt={3}>{children}</Box>
    </Typography>
  );
}

export default compose(
  withBoardContext,
  withStyles(styles),
  withFirebaseContext,
  withRouter,
  withAuthUserContext
)(TaskDetail);