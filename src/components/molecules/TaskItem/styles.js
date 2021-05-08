import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    '&:not(:last-child)': {
      marginBottom: 10,
    },
  },
  name: {
    textTransform: 'capitalize',
  },
  chip: {
    marginRight: theme.spacing(1),
  },
  avatar: {
    backgroundColor: theme.palette.error.dark,
  },
  previewText: {
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}))
