import React from "react";
import WidgetButtonComponent from "./WidgetButtonComponent";

export default class ParagraphWidgetComponent extends React.Component {

    state = {
        widget: this.props.widget
    }
    render() {
        return (
            <div>
                {/*{this.props.widget.widgetOrder}*/}
                {
                    this.props.editing.id === this.props.widget.id &&
                    <div>
                        <div>
                            <h2 className="float-left">Paragraph widget</h2>
                            <span className="float-right"> <WidgetButtonComponent widget={this.state.widget}
                                                                                  editingWidget={this.props.editing}
                                                                                  updateRealWidget={this.props.updateRealWidget}
                                                                                  deleteRealWidget={this.props.deleteRealWidget}
                                                                                  changeOrder={this.props.changeOrder}
                            /></span>
                        </div>

                        <input className="form-control"
                               id="heading-text"
                               type="text"
                               placeholder="Heading text"
                               onChange={(event) => this.setState(
                                   {
                                       widget: {
                                           ...this.state.widget,
                                           text: event.target.value
                                       }
                                   }
                               )}
                               value={this.state.widget.text}
                        />
                        <input
                            className="form-control"
                            id="widget-name"
                            type="text"
                            placeholder="Widget name"
                            onChange={(event) => this.setState(
                                {
                                    widget: {
                                        ...this.state.widget,
                                        name: event.target.value
                                    }
                                }
                            )}
                            value={this.state.widget.name}
                        />
                        <h3>Preview</h3>
                    </div>
                }
                {
                    <p>{this.state.widget.text}</p>
                }

            </div>
        )
    }
}