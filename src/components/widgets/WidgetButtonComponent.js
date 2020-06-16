import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp, faCheck, faPencilAlt, faTimes} from "@fortawesome/free-solid-svg-icons";

class WidgetButtonComponent extends React.Component {

    state = {
        order: this.props.widget.widgetOrder
    }

    render() {
        return (
            <div>
                {
                    this.props.editingWidget.id === this.props.widget.id &&
                    <div>
                        <button
                            className="btn btn-pill wbdv-widget-item-save-btn float-right"
                            onClick={() => {
                                this.props.updateRealWidget({...this.props.widget, widgetOrder: this.state.order} )
                            }}>
                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                        </button>

                        <button onClick={() => this.props.deleteRealWidget(this.props.widget.id)}
                                className="btn btn-pill wbdv-widget-item-delete-btn float-right">
                            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                        </button>

                        <button className="btn btn-pill wbdv-widget-item-delete-btn float-right"
                                onClick={() => {this.props.changeOrder(this.props.widget.widgetOrder - 1, this.props.widget, "up")
                                 this.setState({order: this.props.widget.widgetOrder - 1})
                                }}>
                            <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                        </button>

                        <button className="btn btn-pill wbdv-widget-item-delete-btn float-right"
                                onClick={() => {this.props.changeOrder(this.props.widget.widgetOrder + 1, this.props.widget, "down")
                                    this.setState({order: this.props.widget.widgetOrder + 1})
                                }}>
                            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default WidgetButtonComponent