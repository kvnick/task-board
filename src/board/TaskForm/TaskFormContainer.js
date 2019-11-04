import { connect } from 'react-redux';

import TaskForm from './TaksForm';
import { BoardSelectors } from '../logic';

const mapStateToProps = (state, ownProps) => ({
    statuses: BoardSelectors.statuses(state),
    seriousness: state.boardStore.seriousness,
    priorities: state.boardStore.priorities,
    historyActions: state.boardStore.historyActions,
    statusesLife: state.boardStore.statusesLife,
    loading: state.boardStore.loading
});

export default connect(mapStateToProps)(TaskForm);
