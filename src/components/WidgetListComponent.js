import React from "react";
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

class WidgetListComponent extends React.Component {

    state = {
        preview: false,
        widgets: this.props.widgets,
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
         this.props.updateWidget(widget.id, widget)
    }

    changeOrder = (index, changedWidget, direction) => {
            this.props.widgets.map(widget => {
                if(widget.id === changedWidget.id) {
                    {this.props.updateWidget(widget.id, {...widget, widgetOrder: index})}
                }
                else if((widget.widgetOrder === index)) {
                    if(direction === "up") {
                        {
                            this.props.updateWidget(widget.id, {...widget, widgetOrder: widget.widgetOrder + 1})
                        }
                    } else if(direction === "down") {
                        {this.props.updateWidget(widget.id, {...widget, widgetOrder: widget.widgetOrder - 1})}
                    }
                }
            })
    }


    render() {
        return(
            <div>
                <br/>
                {this.props.widgets.length > 0 &&
                <button  className="btn btn-pill float-right"
                         onClick={() =>
                             this.setState({preview: !this.state.preview})
                         }>
                    {
                        this.state.preview !== false &&
                        <span>Edit</span>
                    }
                    {
                        this.state.preview === false &&
                        <span>Preview</span>
                    }
                </button>
                }

            <br/>
                <div>
                    {
                        this.props.widgets.sort((a,b) => (a.widgetOrder - b.widgetOrder)).map(widget =>
                            <div key={widget.id} className="heading-widget">
                                {
                                    widget.type === 'HEADING' &&
                                    <HeadingWidgetComponent widget={widget}
                                                            preview={this.state.preview}
                                                            updateRealWidget={this.updateRealWidget}
                                                            deleteRealWidget={this.props.deleteWidget}
                                                            changeOrder={this.changeOrder}
                                                            length={this.props.widgets.length}/>
                                }
                                {
                                    widget.type === 'PARAGRAPH' &&
                                    <ParagraphWidgetComponent widget={widget}
                                                              preview={this.state.preview}
                                                              updateRealWidget={this.updateRealWidget}
                                                              deleteRealWidget={this.props.deleteWidget}
                                                              changeOrder={this.changeOrder}
                                                              length={this.props.widgets.length}/>
                                }
                            </div>)
                    }
                </div>
                <br/>
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

