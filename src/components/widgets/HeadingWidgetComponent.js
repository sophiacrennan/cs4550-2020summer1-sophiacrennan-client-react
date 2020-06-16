import React from "react";
import WidgetButtonComponent from "./WidgetButtonComponent";

export default class HeadingWidgetComponent extends React.Component {
    state = {
        widget: this.props.widget
    }

    render() {
        return(
                <div>
                    {/*{this.props.widget.widgetOrder}*/}
                    {
                        this.props.editing.id === this.props.widget.id &&
                            <div>
                                <div>
                                    <h2 className="float-left">Heading widget</h2>
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
                                <select className="form-control"
                                        id="heading-type"
                                        onChange={(event) => this.setState(
                                            {
                                                widget: {
                                                    ...this.state.widget,
                                                    size: parseInt(event.target.value)
                                                }
                                            }
                                        )}>
                                    <option selected value="1">Heading 1</option>
                                    <option value="2">Heading 2</option>
                                    <option value="3">Heading 3</option>
                                    <option value="4">Heading 4</option>
                                    <option value="5">Heading 5</option>
                                    <option value="6">Heading 6</option>
                                </select>
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
                        this.state.widget.size === 1 &&
                        <h1>{this.state.widget.text}</h1>

                    }
                    {
                        this.state.widget.size === 2 &&
                        <h2>{this.state.widget.text}</h2>
                    }
                    {
                        this.state.widget.size === 3 &&
                        <h3>{this.state.widget.text}</h3>
                    }
                    {
                        this.state.widget.size === 4 &&
                        <h4>{this.state.widget.text}</h4>
                    }
                    {
                        this.state.widget.size === 5 &&
                        <h5>{this.state.widget.text}</h5>
                    }
                    {
                        this.state.widget.size === 6 &&
                        <h6>{this.state.widget.text}</h6>
                    }

                </div>
        )
    }
}