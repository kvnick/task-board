import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Footer from './layout/Footer';
import { HeaderContainer } from './layout/Header';
import { NotFoundError } from './errors';
import { StatusListContainer, TaskDetailContainer, TaskCreate } from './board';
import { BoardContext } from './context';
import { LoginPageContainer } from './auth/LoginPage';
import { withAuthentication, withAuthorization } from './utils/Firebase';

export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    TASKS_LIST: '/task',
    CREATE_TASK: '/task/create',
    PREVIEW_TASK: '/task/:id'
};

const PageTasksList = withAuthorization(StatusListContainer);
const PageNotFound = withAuthorization(NotFoundError);
const PageLogin = (props) => <LoginPageContainer {...props} />;
const redirectToTasksPage = (props) => {
    return <Redirect to={ROUTES.TASKS_LIST} />;
};

class App extends PureComponent {
    getContext = () => ({
        //   ...this.state,
        //   onCreate: this.handleTaskCreate,
        //   onEdit: this.handleTaskEdit,
        //   onTaskHistoryCreate: this.handleTaskHistoryCreate,
        //   getTask: this.getTask
    });

    // handleTaskCreate = task => {
    //   return new Promise((resolve, reject) => {
    //     this.props.firebase.tasks().push({
    //       ...task
    //     }, error => {
    //       error ? reject(error) : resolve()
    //     });
    //   })
    // }

    // handleTaskEdit = (task) => {
    //   return this.props.firebase
    //     .task(task.id)
    //     .set(task);
    // }

    // handleTaskHistoryCreate = (id, history) => {
    //   return new Promise((resolve, reject) => {
    //     this.props.firebase
    //       .taskHistory(id).push({
    //         ...history
    //       }, error => {
    //         error ? reject(error) : resolve()
    //       });
    //   })
    // }

    // getTasks = ({options} = {}) => {
    //   return new Promise((resolve, reject) => {
    //     this.props.firebase.tasks()
    //       .on('value', snapshot => {
    //         const tasksObject = snapshot.val();

    //         if (tasksObject) {
    //           const tasksList = Object.keys(tasksObject).map(key => ({
    //             ...tasksObject[key],
    //             id: key,
    //           }));

    //           resolve(tasksList);
    //         } else {
    //           reject('Task list is empty');
    //         }
    //       }, error => error && reject(error)
    //       );
    //   });
    // }

    // getTask = (id) => {
    //   return new Promise((resolve, reject) => {
    //     this.props.firebase
    //       .task(id)
    //       .on('value', snapshot => {
    //         const task = {
    //           ...snapshot.val(),
    //           id: snapshot.key
    //         };
    //         resolve(task)
    //       });
    //   });
    // }

    render() {
        return (
            <BoardContext.Provider value={this.getContext()}>
                <BrowserRouter>
                    <HeaderContainer />
                    <Switch>
                        <Route
                            exact
                            path={ROUTES.HOME} render={redirectToTasksPage}
                        />
                        <Route
                            path={ROUTES.TASKS_LIST}
                            render={props => <PageTasksList {...props} />}
                        />
                        <Route
                            path={ROUTES.LOGIN}
                            component={props => <PageLogin {...props} />}
                        />
                        <Route
                            render={props => <PageNotFound {...props} />}
                        />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </BoardContext.Provider>
        );
    }
}

export default withAuthentication(App);
