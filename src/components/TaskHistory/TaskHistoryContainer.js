import { connect } from "react-redux";
import TaskHistory from "./TaskHistory";

const prepareHistoryItems = history => {
    if (!history) return [];

    return Object.entries(history).reduce((items, item) => {
        const [id, history] = item;
        items.push({ ...history, id: id });
        return items;
    }, []);
};

const mapStateToProps = (state, ownProps) => {
    return {
        history: prepareHistoryItems(ownProps.history),
    };
};

export default connect(mapStateToProps)(TaskHistory);
