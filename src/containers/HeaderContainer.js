import { connect } from 'react-redux'
import Header from '../components/organisms/Header'
import { AuthActions } from '../store/authStore'

const mapStateToProps = (state) => ({
  authUser: state.authStore.authUser,
})

const mapDispatchToProps = (dispatch) => ({
  handleLogout: (history) => dispatch(AuthActions.handleLogout(history)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
