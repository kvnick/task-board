import React from 'react'
import { Router as ReactRouter } from 'react-router-dom'

import NotifierContainer from './components/organisms/Notifier'
import history from './services/utils/customHistory'
import { withAuthentication } from './services/utils/Firebase'
import Wrapper from './components/organisms/Wrapper'
import Router from './router'

function App() {
  return (
    <ReactRouter history={history}>
      <>
        <NotifierContainer />
        <Wrapper>
          <Router />
        </Wrapper>
      </>
    </ReactRouter>
  )
}

export default withAuthentication(App)
