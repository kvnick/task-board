import { makeStyles } from '@material-ui/styles'

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowY: 'auto',
  },
  '@global': {
    'html, body, #root': {
      height: '100%',
    },
  },
  paper: {
    backgroundColor: theme.palette.grey[300],
    padding: theme.spacing(2),
    maxHeight: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
  container: {
    height: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
  },
  gridContainer: {
    marginTop: 1,
    height: '100%',
    transform: 'translateZ(0)',
    flexWrap: 'nowrap',
    overflowY: 'auto',
    [theme.breakpoints.down('xs')]: {
      overflowY: 'auto',
      flexWrap: 'wrap',
    },
  },
  item: {
    height: '100%',
    minWidth: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: 'auto',
    },
  },
  title: {
    flex: '0 0 auto',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  titleText: {
    '& ~ $titleCount': {
      paddingLeft: theme.spacing(0.5),
    },
  },
  titleCount: {
    color: theme.palette.text.secondary,
  },
  tasksWrapper: {
    height: 'auto',
    [theme.breakpoints.up('xs')]: {
      flex: '1 1 auto',
      overflowY: 'auto',
    },
  },
}))
