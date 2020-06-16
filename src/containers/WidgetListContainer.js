import WidgetService from "../services/WidgetService";
import {connect} from "react-redux";
import WidgetListComponent from "../components/WidgetListComponent";


const stateToPropertyMapper = (state) => ({
    widgets: state.WidgetReducer.widgets
})

const dispatchToPropertyMapper = (dispatcher) => ({
    createWidget: (tid, widget) =>
        WidgetService.createWidget(tid, widget)
            .then(actualNewWidgetFromServer =>
                dispatcher({
                    type: "CREATE_WIDGET",
                    widget: actualNewWidgetFromServer
                })),
    deleteWidget: (wid) =>
        WidgetService.deleteWidget(wid)
            .then(status =>
                dispatcher({
                    type: "DELETE_WIDGET",
                    widgetId: wid
                })),
    findWidgetsForTopic: (tid) =>
        WidgetService.findWidgetsForTopic(tid)
            .then(actualWidgetsFromServer =>
                dispatcher({
                    type: "FIND_WIDGETS_FOR_TOPIC",
                    widgetsFromServer: actualWidgetsFromServer
                })),
    updateWidget: (wid, newWidget) => {
        WidgetService.updateWidget(wid, newWidget)
        .then(status =>
            dispatcher({
                 type: "UPDATE_WIDGET",
                 updatedWidget: newWidget
             }))
    },
})

const WidgetListContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WidgetListComponent)

export default WidgetListContainer