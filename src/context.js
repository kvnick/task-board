import React, { createContext } from 'react';

export const BoardContext = createContext();
export const withBoardContext = Component =>
  props => <BoardContext.Consumer>
  {value => <Component {...props} {...value} /> }
  </BoardContext.Consumer>

export const FirebaseContext = createContext();
export const withFirebaseContext = Component =>
  props => <FirebaseContext.Consumer>
  {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>

export const AuthUserContext = createContext();
export const withAuthUserContext = Component =>
  props => <AuthUserContext.Consumer>
  {authUser => <Component {...props} authUser={authUser} /> }
  </AuthUserContext.Consumer>




