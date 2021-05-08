import React from 'react'

import Button from '@material-ui/core/Button'

import EmailField from '../LoginFormFields/EmailField'
import PasswordField from '../LoginFormFields/PasswordField'
import useStyles from './styles'

const LoginFormRender = ({ handleSubmit, submitting, pristine }) => {
  const classes = useStyles()

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.form}
      noValidate
      autoComplete="off"
    >
      <EmailField autoFocus />

      <PasswordField />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={submitting || pristine}
      >
        Sign In
      </Button>
    </form>
  )
}

export default LoginFormRender
