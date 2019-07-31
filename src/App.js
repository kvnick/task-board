import React, { Component } from 'react';
import CssBaseLine from '@material-ui/core/CssBaseLine';
import { Header, Footer } from './components/layout';
import { statuses, priorities, seriousness, historyActions } from './data.js';
import { NotFoundError } from './components/errors';
import { StatusList, TaskDetail, TaskCreate } from './components/board';
import { BoardContext } from './context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './components/auth';
import withAuthentication from './hooks/withAuthentication';
import withAuthorization from './hooks/withAuthorization';
import { ROUTES } from './helpers';

class App extends Component {
  state = {
    tasks: [],
    tasksError: null
  }

  componentDidMount() {
    // this.updateTasks(); not working after redirect

    this.props
      .firebase.tasks()
      .on('value', snapshot => {
        const tasksObject = snapshot.val();

        if (tasksObject) {
          const tasksList = Object.keys(tasksObject).map(key => ({
            ...tasksObject[key],
            id: key,
          }));

          this.setState({tasks: tasksList});
        } else {
          this.setState({tasks: [], tasksError: 'Task list is empty'});
        }
      },
        error => error && this.setState({tasksError: error})
      );
  }

  /**
   * Update tasks
   * @return Promise
   */
  updateTasks() {
    this.getTasks()
      .then(tasks => {
        this.setState({tasks: tasks})
      })
      .catch(error =>
        this.setState({tasks: [], tasksError: error})
      );
  }

  /**
   * Todo: sort tasks by any key, createDate for example
   */
  getTasksByStatuses() {
    const initTasks = statuses.reduce((tasks, status) => ({
      ...tasks,
      [status]: []
    }), {});

    return Object.entries(this.state.tasks.reduce((tasks, task) => {
      const { status } = task;
      tasks[status] = [...tasks[status], task];
      return tasks;
    }, initTasks));
  }

  getContext = () => ({
    statuses,
    priorities,
    seriousness,
    historyActions,
    ...this.state,
    tasksByStatuses: this.getTasksByStatuses(),
    handleLogout: this.handleAppLogout,
    onCreate: this.handleTaskCreate,
    onEdit: this.handleTaskEdit,
    onTaskHistoryCreate: this.handleTaskHistoryCreate,
    getTask: this.getTask
  })

  handleTaskCreate = task => {
    return new Promise((resolve, reject) => {
      this.props.firebase.tasks().push({
        ...task
      }, error => {
        error ? reject(error) : resolve()
      });
    })
  }

  /**
   * @return Promise
   */
  handleTaskEdit = (task) => {
    return this.props.firebase
      .task(task.id)
      .set(task);
  }

  handleTaskHistoryCreate = (id, history) => {
    return new Promise((resolve, reject) => {
      this.props.firebase
        .taskHistory(id).push({
          ...history
        }, error => {
          error ? reject(error) : resolve()
        });
    })
  }

  getTasks = ({options} = {}) => {
    return new Promise((resolve, reject) => {
      this.props.firebase.tasks()
        .on('value', snapshot => {
          const tasksObject = snapshot.val();

          if (tasksObject) {
            const tasksList = Object.keys(tasksObject).map(key => ({
              ...tasksObject[key],
              id: key,
            }));

            resolve(tasksList);
          } else {
            reject('Task list is empty');
          }
        }, error => error && reject(error)
        );
    });
  }

  getTask = (id) => {
    return new Promise((resolve, reject) => {
      this.props.firebase
        .task(id)
        .on('value', snapshot => {
          const task = {
            ...snapshot.val(),
            id: snapshot.key
          };
          resolve(task)
        });
    });
  }

  render() {
    const condition = authUser => !!authUser;

    const ProtectedWrapper = withAuthorization(condition)(StatusList),
      ProtectedTaskDetail = withAuthorization(condition)(TaskDetail),
      ProtectedTaskCreate = withAuthorization(condition)(TaskCreate),
      ProtectedNotFoundError = withAuthorization(condition)(NotFoundError);

    return (
      <BoardContext.Provider value={this.getContext()}>
        <BrowserRouter>
          <CssBaseLine />
            <Header />
            <Switch>
              <Route exact path={ROUTES.HOME} render={props => <ProtectedWrapper  {...props} />} />
              <Route path={ROUTES.CREATE_TASK} render={props => <ProtectedTaskCreate  {...props} />} />
              <Route path={ROUTES.LOGIN} component={Login} />
              <Route path={ROUTES.PREVIEW_TASK} render={props => <ProtectedTaskDetail  {...props} />} />
              <Route render={props => <ProtectedNotFoundError  {...props} />} />
            </Switch>
            <Footer />
        </BrowserRouter>
      </BoardContext.Provider>
    );
  }
}

export default withAuthentication(App);
