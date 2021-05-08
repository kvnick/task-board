import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'

import { withAuthorization } from '../services/utils/Firebase'
import NotFoundPage from '../components/pages/NotFoundPage'
import Loading from '../components/molecules/Loading'

const FallbackLoading = <Loading fixed />
const PageLogin = lazy(() => import('../containers/LoginPageContainer'))
const PageTasks = lazy(() => import('../containers/TaskListContainer'))
const PageTaskDetail = lazy(() => import('../containers/TaskDetailContainer'))
const PageTaskCreate = lazy(() => import('../containers/TaskCreateContainer'))

const loadable = (component) => (props) => {
  const Component = component
  return (
    <Suspense fallback={FallbackLoading}>
      <Component {...props} />
    </Suspense>
  )
}

const PageAuthorizedTasks = withAuthorization(PageTasks)
const PageAuthorizedTaskDetail = withAuthorization(PageTaskDetail)
const PageAuthorizedTaskCreate = withAuthorization(PageTaskCreate)
const PageNotFound = withAuthorization(NotFoundPage)

const routes = {
  home: {
    exact: true,
    path: '/',
    render: () => <Redirect to="/task" />,
  },
  login: {
    exact: true,
    path: '/login',
    component: loadable(PageLogin),
  },
  taskCreate: {
    exact: true,
    path: '/task/create',
    component: loadable(PageAuthorizedTaskCreate),
  },
  taskDetail: {
    exact: true,
    path: '/task/:id',
    component: loadable(PageAuthorizedTaskDetail),
  },
  tasks: {
    exact: true,
    path: '/task',
    component: loadable(PageAuthorizedTasks),
  },
  notFound: {
    component: PageNotFound,
  },
}

const normalizedRoutes = Object.keys(routes).reduce((prev, curr) => {
  const route = routes[curr]
  if (Object.hasOwnProperty.call(route, 'path')) {
    return { ...prev, [curr]: route.path }
  }
  return prev
}, {})

export { normalizedRoutes }

export default routes
