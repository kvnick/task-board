import { connect } from "react-redux";
import { BoardActions } from "../store/boardStore";
import TaskCreatePage from "../components/pages/TaskCreatePage";

const mapStateToProps = state => ({
    loading: state.boardStore.loading,
    error: state.boardStore.error
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (values, formApi, onFinished) =>
        dispatch(BoardActions.createTask(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreatePage);
