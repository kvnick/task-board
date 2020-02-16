import TaskDetail from './TaskDetail';
import { connect } from 'react-redux';
import { BoardActions, BoardSelectors } from '../logic';

const mapStateToProps = (state, ownProps) => ({
    task: BoardSelectors.task(state),
    error: BoardSelectors.error(state),
    historyActions: BoardSelectors.historyActions(state),
});

const mapDispatchToProps = dispatch => ({
    fetchTask: id => dispatch(BoardActions.fetchTask(id)),
    onSubmit: (values, formApi, onFinished) =>
        dispatch(BoardActions.updateTask(values)),
    onDelete: id => dispatch(BoardActions.deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
