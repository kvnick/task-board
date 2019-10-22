import { connect } from 'react-redux';
import Header from './Header';
import { AuthActions } from '../../auth/logic';

const mapStateToProps = (
    state
) => ({
    authUser: state.authStore.authUser
});

const mapDispatchToProps = (dispatch) => ({
    handleLogout: (history) => dispatch(AuthActions.handleLogout(history))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);