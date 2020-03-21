import { connect } from "react-redux";
import Footer from "../components/organisms/Footer/Footer";
import { AuthSelectors } from "../store/authStore";

const mapStateToProps = state => ({
    authUser: AuthSelectors.authUser(state),
});

export default connect(mapStateToProps)(Footer);
