import React, { Component } from 'react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { statusesLife } from '../../data';
import {
  TextField, FormControl, Button,
  MenuItem, InputLabel, Input, Select
} from '@material-ui/core';
import { SnackBarError } from '../errors';

const styles = theme => ({
  form: {

  },
  formControl: {
    minWidth: 220,
    '&:not(:last-child)': {
      marginBottom: 15
    }
  },
  snackbar: {
    error: {
      backgroundColor: theme.palette.danger
    }
  }
});

export class Form extends Component {
  state = {
    ...this.getInitState(),
    showHistoryComment: false,
    history: {
      comment: ''
    }
  }

  getInitState() {
    const { task } = this.props;

    return task ? {
      task: {
        ...task
      },
      initialStatus: task.status,
    } : {
      task: {
        serious: '',
        status: '',
        priority: '',
        name: '',
        previewText: '',
        detailText: '',
      },
      initialStatus: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: this.props.task ? this.props.task.id : '',
      ...this.state.task
    }, {
      ...this.state.history
    });
  }

  handleHistoryChange = ({ target: { value, name} }) => {
    this.setState(state => ({
      history: { ...state.history, [name]: value }
    }));
  }

  handleChange = ({ target: {value, name}}) => {
    // in this case status will be show on edit form
    if (name === 'status') {
      this.setState({
        showHistoryComment: this.state.initialStatus !== value
      });
    }

    this.setState((state) => ({
      task: { ...state.task, [name]: value }
    }));
  }

  getValidStatuses(initialStatus, statuses) {
    const validStatuses = statusesLife.reduce((validStatuses, statusLive) => {
      const [status, toStatuses] = statusLive;

      validStatuses[status] = toStatuses;

      return validStatuses;
    }, {});

    return validStatuses[initialStatus]
      ? [...validStatuses[initialStatus], initialStatus]
      : statuses;
  }

  static gitDeliveredStateFromProps({ task }, state) {
    return task || null;
  }

  render() {
    const {
        classes,
        priorities,
        seriousness,
        statuses,
        error
      } = this.props;
      const {
        task: {
          serious, status, priority, name,
          previewText, detailText
        },
        history,
        showHistoryComment,
        initialStatus
      } = this.state;

    const validStatuses = this.getValidStatuses(
        initialStatus, statuses
    );

    return (
      <>
        <form onSubmit={this.handleSubmit} className={classes.form} autoComplete="off">
          <FormControl fullWidth className={classes.formControl}>
            <TextField
              id="name"
              label="Name"
              className={classes.textField}
              name="name"
              value={name}
              onChange={this.handleChange}
              margin="normal"
            />
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <TextField
              id="previewText"
              label="Preview Text"
              name="previewText"
              value={previewText}
              onChange={this.handleChange}
              multiline
              rows="4"
              className={classes.textField}
              margin="normal"
            />
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <TextField
              id="detailText"
              label="Detail Text"
              name="detailText"
              value={detailText}
              onChange={this.handleChange}
              multiline
              rows="4"
              className={classes.textField}
              margin="normal"
            />
          </FormControl>
          {this.props.task
            ?
              <>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor="status">Status</InputLabel>
                  <Select
                    value={status}
                    onChange={this.handleChange}
                    input={<Input name="status" id="status" />}
                  >
                    {validStatuses.map(validStatus =>
                      <MenuItem key={validStatus} disabled={validStatus === status} value={validStatus}>{validStatus}</MenuItem>
                    )}
                  </Select>
                </FormControl>
                {showHistoryComment &&
                  <FormControl fullWidth required className={classes.formControl}>
                    <TextField
                      id="historyComment"
                      label="Comment"
                      name="comment"
                      value={history.comment}
                      onChange={this.handleHistoryChange}
                      required={true}
                      multiline
                      rows="4"
                      className={classes.textField}
                      margin="normal"
                    />
                  </FormControl>
                }
              </>
            : ''
          }
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="priority">
              Priority
            </InputLabel>
            <Select
              value={priority}
              onChange={this.handleChange}
              input={<Input name="priority" id="priority" />}
            >
              {priorities.map(priority =>
                <MenuItem key={priority} value={priority}>{priority}</MenuItem>
              )}
            </Select>
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="serious">Serious</InputLabel>
            <Select
              value={serious}
              onChange={this.handleChange}
              input={<Input name="serious" id="serious" />}
            >
              {seriousness.map(serious =>
                <MenuItem key={serious} value={serious}>{serious}</MenuItem>
              )}
            </Select>
          </FormControl>
          <FormControl fullWidth style={{marginTop: 20}} className={classes.formControl}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={!name || (showHistoryComment && history.comment === '')}
            >
             {this.props.task ? 'Edit' : 'Create'}
            </Button>
          </FormControl>
        </form>
        {error &&
         <SnackBarError error={error} />
        }
      </>
    )
  }
}

export default compose(
  withStyles(styles)
)(Form);