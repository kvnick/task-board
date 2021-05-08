import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { AuthActions } from '../../../store/authStore'

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values, history) =>
    dispatch(AuthActions.handleLogin(values, history)),
})

export default connect(null, mapDispatchToProps)(LoginForm)
