import { connect } from 'react-redux'
import { AuthSelectors } from '../store/authStore'
import Footer from '../components/organisms/Footer'

const mapStateToProps = (state) => ({
  authUser: AuthSelectors.authUser(state),
})

export default connect(mapStateToProps)(Footer)
