import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import { firebaseAuth } from '../../FirebaseApp'
import { normalizedRoutes } from '../../../router/routes'

const withAuthorization = (Component) => {
  const WithAuthorization = (props) => {
    const history = useHistory()
    useEffect(() => {
      const listener = firebaseAuth.onAuthStateChanged((authUser) => {
        if (!authUser) {
          history.push(normalizedRoutes.login)
        }
      })

      return () => {
        listener()
      }
    }, [history])

    return <Component {...props} />
  }

  return WithAuthorization
}

export default withAuthorization
