import { connect } from "react-redux";
import StatusList from "./StatusList";
import { BoardActions, BoardSelectors } from '../logic';

const mapStateToProps = (state) => ({
    ...state.boardReducer,
    tasks: BoardSelectors.prepareTasksByStatuses(state),
});

const mapDispatchToProps = (dispatch) => ({
    fetchTasks: () => dispatch(BoardActions.fetchTasks()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatusList);