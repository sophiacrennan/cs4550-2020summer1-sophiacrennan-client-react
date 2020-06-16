import React from "react";
import WidgetButtonComponent from "./WidgetButtonComponent";

export default class ParagraphWidgetComponent extends React.Component {

    state = {
        widget: this.props.widget
    }
    render() {
        return (
            <div>
                {
                    this.props.preview === false &&
                    <div>
                        <div>
                            <h3 className="float-left">Paragraph widget</h3>
                            <span className="float-right"> <WidgetButtonComponent widget={this.state.widget}
                                                                                  preview={this.props.preview}
                                                                                  updateRealWidget={this.props.updateRealWidget}
                                                                                  deleteRealWidget={this.props.deleteRealWidget}
                                                                                  changeOrder={this.props.changeOrder}
                                                                                  length={this.props.length}
                            /></span>
                        </div>

                        <input className="form-control resize"
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
                        <h4>Preview</h4>
                    </div>
                }
                {
                    <p>{this.state.widget.text}</p>
                }

            </div>
        )
    }
}