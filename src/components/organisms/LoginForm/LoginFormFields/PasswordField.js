import React from 'react'

import TextField from '../../../../services/utils/FormFields/TextField'

const PasswordField = (props) => {
  const fieldProps = {
    variant: 'outlined',
    margin: 'normal',
    required: true,
    fullWidth: true,
    id: 'password',
    label: 'Password',
    name: 'password',
    type: 'password',
    formControlProps: {
      fullWidth: true,
    },
  }

  return <TextField {...fieldProps} />
}

export default PasswordField
