import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { FirebaseContext } from './context';
import FirebaseApp from './services/FirebaseApp';

render(
  <FirebaseContext.Provider value={new FirebaseApp()} >
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
