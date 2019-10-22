export default theme => ({
  root: {
    '&:not(:last-child)': {
      marginBottom: 10
    }
  },
  name: {
    textTransform: 'capitalize'
  },
  chip: {
    marginRight: theme.spacing(1),
  },
  avatar: {
    backgroundColor: theme.palette.error.dark
  }
});