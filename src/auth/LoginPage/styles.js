const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  snackbar: {
    error: {
      backgroundColor: theme.palette.error.dark,
    }
  },
  progress: {

  },
  progressWrapper: {
    minHeight: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles;