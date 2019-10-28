import { connect } from 'react-redux';
import Footer from './Footer';
import { AuthSelectors } from '../../auth/logic';

const mapStateToProps = state => ({
    authUser: AuthSelectors.authUser(state)
});

export default connect(
    mapStateToProps
)(Footer);