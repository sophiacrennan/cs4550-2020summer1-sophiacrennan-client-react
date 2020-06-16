const initialState = {
    widgets: []
}

const WidgetReducer = (state=initialState,action) => {
        switch (action.type) {
            case "CREATE_WIDGET":
                return {
                    ...state,
                    widgets: [...state.widgets, action.widget]
                }
                break;
            case "FIND_WIDGETS_FOR_TOPIC":
                return {
                    ...state,
                    widgets: action.widgetsFromServer
                }
                break;
            case "DELETE_WIDGET":
                return {
                    ...state,
                    widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
                }
                break;
            case "UPDATE_WIDGET":
                return {
                    ...state,
                    widgets: state.widgets.map(widget => widget.id === action.updatedWidget.id ?
                        action.updatedWidget : widget)
                }
                break;
            default:
                return state
        }
}

export default WidgetReducer