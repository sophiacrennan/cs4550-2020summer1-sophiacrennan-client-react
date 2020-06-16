import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp, faCheck, faPencilAlt, faTimes} from "@fortawesome/free-solid-svg-icons";

class WidgetButtonComponent extends React.Component {

    state = {
        order: this.props.widget.widgetOrder,
        type: this.props.widget.type
    }

    render() {
        return (
            <div>
                {
                    this.props.preview === false &&
                    <div>
                        <select className="form-control"
                                id="heading-type"
                                onChange={(event) =>
                                this.props.updateRealWidget({...this.props.widget, type: event.target.value})}
                        value={this.state.type}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                        </select>
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
                        {
                            (this.state.order > 1) &&
                            <button className="btn btn-pill wbdv-widget-item-delete-btn float-right"
                                    onClick={() => {this.props.changeOrder(this.state.order - 1, this.props.widget, "up")
                                        this.setState({order: this.state.order - 1})
                                    }}>
                                <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                            </button>
                        }
                        {
                            (this.state.order < this.props.length) &&
                            <button className="btn btn-pill wbdv-widget-item-delete-btn float-right"
                                    onClick={() => {this.props.changeOrder(this.state.order + 1, this.props.widget, "down")
                                        this.setState({order: this.state.order + 1})
                                    }}>
                                <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                            </button>
                        }

                    </div>
                }
            </div>
        )
    }
}

export default WidgetButtonComponent