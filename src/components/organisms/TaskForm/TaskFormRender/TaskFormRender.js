import React, { useEffect } from 'react'
import { useFormState, FormSpy } from 'react-final-form'

import MenuItem from '@material-ui/core/MenuItem'

import SelectField from '../../../../services/utils/FormFields/SelectField'
import TaskFormButtons from '../TaskFormButtons/TaskFormButtons'
import TaskName from '../TaskFormFields/TaskName'
import TaskPreviewText from '../TaskFormFields/TaskPreviewText'
import TaskDetailText from '../TaskFormFields/TaskDetailText'
import TaskComment from '../TaskFormFields/TaskComment'
import TaskPriority from '../TaskFormFields/TaskPriority'
import TaskSerious from '../TaskFormFields/TaskSerious'
import useStyles from './styles'

const TaskFormRender = (props) => {
  const {
    onCancel,
    priorities,
    seriousness,
    validStatuses,
    setStatusChanged,
    ...formProps
  } = props

  const classes = useStyles()
  const formControlProps = {
    fullWidth: true,
    className: classes.formControl,
  }

  const { values, initialValues } = useFormState({
    susbscription: { values: true },
  })

  useEffect(() => {
    if (values && values.status && initialValues && initialValues.status) {
      setStatusChanged(values.status !== initialValues.status)
    }
  }, [initialValues, setStatusChanged, values])

  return (
    <form
      onSubmit={formProps.handleSubmit}
      className={classes.form}
      autoComplete="off"
      noValidate
    >
      <TaskName formControlProps={formControlProps} />

      <TaskPreviewText formControlProps={formControlProps} />

      <TaskDetailText formControlProps={formControlProps} />

      {formProps.initialValues && (
        <>
          <SelectField
            label="Status"
            name="status"
            formControlProps={formControlProps}
          >
            {validStatuses.map((validStatus) => (
              <MenuItem
                key={validStatus}
                disabled={validStatus === formProps.values.status}
                value={validStatus}
              >
                {validStatus}
              </MenuItem>
            ))}
          </SelectField>

          <FormSpy subscription={{ values: true, initialValues: true }}>
            {(formSpyProps) =>
              formSpyProps.values.status !==
                formSpyProps.initialValues.status && (
                <TaskComment formControlProps={formControlProps} />
              )
            }
          </FormSpy>
        </>
      )}

      <TaskPriority
        priorities={priorities}
        formControlProps={formControlProps}
      />

      <TaskSerious
        seriousness={seriousness}
        formControlProps={formControlProps}
      />

      <TaskFormButtons
        submitButton={formProps.initialValues ? 'Update' : 'Create'}
        onCancel={onCancel}
        disabled={formProps.disabled || formProps.pristine}
        onSubmit={formProps.handleSubmit}
      />
    </form>
  )
}

export default TaskFormRender
