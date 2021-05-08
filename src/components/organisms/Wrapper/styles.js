import { createStyles, makeStyles } from '@material-ui/styles'

export default makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',

      [theme.breakpoints.up('sm')]: {
        overflow: 'hidden',
        height: '100%',
      },
    },
  }),
)
