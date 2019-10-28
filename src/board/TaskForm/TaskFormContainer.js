import { connect } from 'react-redux';

import TaskForm from "./TaksForm";
import { BoardSelectors, BoardActions } from "../logic";

const mapStateToProps = (state, ownProps) => ({
  statuses: BoardSelectors.statuses(state),
  seriousness: state.boardStore.seriousness,
  priorities: state.boardStore.priorities,
  historyActions: state.boardStore.historyActions,
  statusesLife: state.boardStore.statusesLife
});

const mapDispatchToProps = dispatch => ({
    onDelete: (id) => dispatch(BoardActions.deleteTask(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);