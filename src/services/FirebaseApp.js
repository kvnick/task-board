import firebase from 'firebase/app';
import Settings from '../settings';
import 'firebase/auth';
import 'firebase/database';

class FirebaseApp {
  constructor() {
    firebase.initializeApp(Settings.credentials.firebase);
    this.auth = firebase.auth();
    this.db = firebase.database();
  }

  // Auth API
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  handleSignOut = () => this.auth.signOut();

  // Database API
  tasks = () => this.db.ref(`tasks`);
  task = id => this.db.ref(`tasks/${id}`);
  taskHistory = id => this.db.ref(`tasks/${id}/history`);
}

export default FirebaseApp;