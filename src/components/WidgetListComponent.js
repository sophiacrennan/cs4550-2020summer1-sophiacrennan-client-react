import React from "react";
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPencilAlt, faPlus, faTimes, faArrowUp, faArrowDown} from "@fortawesome/free-solid-svg-icons";

class WidgetListComponent extends React.Component {

    state = {
        newWidgetTitle: 'New Topic',
        editingWidget: {},
        selectedWidget: {},
    }

    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.params.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.topicId !== this.props.params.topicId) {
            this.props.findWidgetsForTopic(this.props.params.topicId)
        }
    }

    updateRealWidget = (widget) => {
        this.setState(
            {
                editingWidget: {}
            }
        )
        this.props.updateWidget(widget.id, widget)
    }

    changeOrder = (index, changedWidget, direction) => {
            this.props.widgets.map(widget => {
                console.log(changedWidget.id)
                if(widget.id === changedWidget.id) {
                    {this.props.updateWidget(widget.id, {...widget, widgetOrder: index})}
                }
                else if((widget.widgetOrder === index)) {
                    if(direction === "up") {
                        {
                            this.props.updateWidget(widget.id, {...widget, widgetOrder: widget.widgetOrder + 1})
                        }
                    } else {
                        {this.props.updateWidget(widget.id, {...widget, widgetOrder: widget.widgetOrder - 1})}
                    }
                }
            })
       // this.props.findWidgetsForTopic(this.props.params.topicId)
    }


    render() {
        return(
            <div>
                <h2>Widget List</h2>
                <div>
                    {
                        this.props.widgets.sort((a,b) => (a.widgetOrder - b.widgetOrder)).map(widget =>
                            <div key={widget.id} className="heading-widget">
                                {
                                    this.state.editingWidget.id !== widget.id &&
                                    <button onClick={() =>
                                        this.setState({editingWidget: widget, selectedWidget: widget})
                                    }
                                            className="btn btn-pill wbdv-widget-edit-btn float-right">
                                        <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
                                    </button>
                                }
                                {
                                    widget.type === 'HEADING' &&
                                    <HeadingWidgetComponent widget={widget}
                                                            editing={this.state.editingWidget}
                                                            updateRealWidget={this.updateRealWidget}
                                                            deleteRealWidget={this.props.deleteWidget}
                                                            changeOrder={this.changeOrder}/>
                                }
                                {
                                    widget.type === 'PARAGRAPH' &&
                                    <ParagraphWidgetComponent widget={widget}
                                                              editing={this.state.editingWidget}
                                                              updateRealWidget={this.updateRealWidget}
                                                              deleteRealWidget={this.props.deleteWidget}
                                                              changeOrder={this.changeOrder}/>
                                }
                            </div>)
                    }
                </div>
                    <button className="btn wbdv-widget-add-btn btn-pill float-right"
                            onClick={() =>
                            {this.props.createWidget(
                                this.props.params.topicId, {
                                    type: 'HEADING',
                                    name: 'New Widget',
                                    size: 1,
                                    widgetOrder: this.props.widgets.length + 1
                                })
                            }}>
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </button>
            </div>
        )
    }
}


export default WidgetListComponent

