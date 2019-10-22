import * as firebaseApi from '../../services/FirebaseApp';

export function getTasks() {
  return firebaseApi.tasks();
}

export function getTask(id) {
  return firebaseApi.task(id);
}