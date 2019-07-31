export const formatDate = (string) =>
  (new Date(string)).toLocaleString()

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  CREATE_TASK: '/create',
  PREVIEW_TASK: '/:id'
};
