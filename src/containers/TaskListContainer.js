import React, { useEffect } from "react";
import { connect } from "react-redux";
import TasksListPage from "../components/pages/TaskListPage";
import { BoardActions, BoardSelectors } from "../store/boardStore";
import Loading from "../components/molecules/Loading";

function TaskList({ tasks, loading, fetchTasks }) {
    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    if (loading) {
        return <Loading />;
    }

    return <TasksListPage tasks={tasks} />;
}

const mapStateToProps = state => ({
    ...state.boardStore,
    tasks: BoardSelectors.getTasksByStatuses(state)
});

const mapDispatchToProps = dispatch => ({
    fetchTasks: () => dispatch(BoardActions.fetchTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
