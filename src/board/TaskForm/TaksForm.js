import React, { Component } from 'react';
import {Form} from 'react-final-form';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import TextField from  '../../utils/FormFields/TextField';
import SelectField from  '../../utils/FormFields/SelectField';
import styles from './styles';

export class TaskForm extends Component {
  state = {
    ...this.getInitState(),
    showHistoryComment: false,
  }

  getInitState() {
    const { task } = this.props;

    return task ? {
      initialStatus: task.status,
    } : {
      initialStatus: '',
    }
  }

  handleSubmit = values => {
    this.props.onSubmit({
      id: this.props.task ? this.props.task.id : '',
      ...values
    });
  }

  getValidStatuses(initialStatus) {
    const { statuses, statusesLife } = this.props;

    const validStatuses = statusesLife.reduce((validStatuses, statusLive) => {
      const [status, toStatuses] = statusLive;
      validStatuses[status] = toStatuses;
      return validStatuses;
    }, {});

    return validStatuses[initialStatus]
      ? [...validStatuses[initialStatus], initialStatus]
      : statuses;
  }

  static getDeliverdStateFromProps(props) {
    return props.error;
  }

  render() {
    const {
        classes,
        priorities,
        seriousness,
        error
      } = this.props;

    const {
      showHistoryComment,
      initialStatus
    } = this.state;

    const validStatuses = this.getValidStatuses(initialStatus);

    return (
      <Form
        initialValues={this.props.task}
        onSubmit={this.handleSubmit}
        subscription={{
          pristine: true,
          values: true
        }}
      >
        {formProps => (
          <form
            onSubmit={formProps.handleSubmit}
            className={classes.form}
            autoComplete="off"
            noValidate
          >
            <TextField
              label="Name"
              name="name"
              formControlProps={{
                fullWidth: true,
                className: classes.formControl
              }}
              margin="normal"
            />

            <TextField
              label="Preview Text"
              name="previewText"
              formControlProps={{
                fullWidth: true,
                className: classes.formControl
              }}
              multiline
              rows="4"
            />

            <TextField
              label="Detail Text"
              name="detailText"
              formControlProps={{
                fullWidth: true,
                className: classes.formControl
              }}
              multiline
              rows="4"
            />

            {this.props.task &&
              <>
                <SelectField
                  label="Status"
                  name="status"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.formControl
                  }}
                >
                  {validStatuses.map(validStatus =>
                    <MenuItem
                      key={validStatus}
                      disabled={validStatus === formProps.values.status}
                      value={validStatus}
                    >
                      {validStatus}
                    </MenuItem>
                  )}
                </SelectField>

                {
                  showHistoryComment &&
                    <TextField
                      label="Comment"
                      name="comment"
                      formControlProps={{
                        fullWidth: true,
                        className: classes.formControl
                      }}
                      multiline
                      rows="4"
                      margin="normal"
                    />
                }
              </>
            }

            <SelectField
              label="Priotiry"
              name="priority"
              formControlProps={{
                fullWidth: true,
                className: classes.formControl
              }}
            >
              {priorities.map(item =>
                <MenuItem key={item} value={item}>{item}</MenuItem>
              )}
            </SelectField>

            <SelectField
              label="Serious"
              name="serious"
              formControlProps={{
                fullWidth: true,
                className: classes.formControl
              }}
            >
              {seriousness.map(item =>
                <MenuItem key={item} value={item}>{item}</MenuItem>
              )}
            </SelectField>

            <FormControl fullWidth className={classnames(classes.formControl, classes.buttonFormControl)}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={! formProps.values.name || (showHistoryComment && formProps.values.comment === '')}
              >
                {this.props.task ? 'Edit' : 'Create'}
              </Button>
            </FormControl>
            <pre>{JSON.stringify(formProps.values, 0, 2)}</pre>
          </form>
        )}
      </Form>
    )
  }
}

export default withStyles(styles)(TaskForm);