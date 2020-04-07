import { connect } from "react-redux";

import {
    NotifierSelectors,
    NotifierActions
} from "../../../store/notifierStore";
import Notifier from "./Notifier";

const mapStateToProps = state => ({
    notifications: NotifierSelectors.notifications(state)
});

const mapDispatchToProps = dispatch => ({
    removeSnackbar: key => dispatch(NotifierActions.removeSnackbar(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifier);
