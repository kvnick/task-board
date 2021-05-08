import { connect } from 'react-redux'

import TaskForm from './TaksForm'
import { BoardSelectors } from '../../../store/boardStore'

const mapStateToProps = (state) => ({
  statuses: BoardSelectors.statuses(state),
  seriousness: state.boardStore.seriousness,
  priorities: state.boardStore.priorities,
  historyActions: state.boardStore.historyActions,
  statusesLife: state.boardStore.statusesLife,
  loading: state.boardStore.loading,
})

export default connect(mapStateToProps)(TaskForm)
