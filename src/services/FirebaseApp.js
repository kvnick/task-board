import * as firebase from 'firebase/app';
import Settings from '../settings';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp(Settings.credentials.firebase);
const firebaseAuth = firebase.auth();
const firebaseDb = firebase.database();

export function doCreateUserWithEmailAndPassword(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function doSignInWithEmailAndPassword(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function handleSignOut() {
    return firebase.auth().signOut();
}

export function tasks() {
    return firebase.database().ref('tasks');
}

export function task(id) {
    return firebase.database().ref(`tasks/${id}`)
}

export function taskHistory(id) {
    return firebase.database().ref(`tasks/${id}/history`);
}

export { firebaseAuth, firebaseDb };