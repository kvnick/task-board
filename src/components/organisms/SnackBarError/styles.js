import { makeStyles, createStyles } from '@material-ui/core/styles'

export default makeStyles((theme) =>
  createStyles({
    snackbar: {
      error: {
        backgroundColor: 'red',
      },
    },
  }),
)
