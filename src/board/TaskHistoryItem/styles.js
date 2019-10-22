export default (theme) => ({
  root: {
    '&:not(:last-child)': {
      marginBottom: 10
    },
  },
  avatar: {
    backgroundColor: theme.palette.error.dark
  }
});