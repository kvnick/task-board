import { connect } from 'react-redux';
import LoginPage from './LoginPage';

const mapStateToProps = state => ({
    error: state.authStore.error,
    loading: state.authStore.loading,
});

export default connect(mapStateToProps)(LoginPage);
