import { connect } from 'react-redux';

import TaskForm from "./TaksForm";
import { BoardSelectors } from "../logic";

const mapStateToProps = (state, ownProps) => ({
  statuses: BoardSelectors.statuses(state),
  seriousness: state.boardReducer.seriousness,
  priorities: state.boardReducer.priorities,
  historyActions: state.boardReducer.historyActions,
  statusesLife: state.boardReducer.statusesLife,
  task: ownProps.task ? ownProps.task : {}
});

export default connect(
  mapStateToProps
)(TaskForm);