import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";

const ModuleList = () =>
    <div className="module-list">
            <div className="list-group wbdv-module-list">
                    <button type="button" className="list-group-item wbdv-module-item list-group-item-action">
                            <span className="wbdv-module-item-title"> Module 1 - jQuery </span>
                            <button
                                className="btn wbdv-module-item-delete-btn float-right">
                                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                            </button>
                    </button>
                    <button type="button" className="list-group-item wbdv-module-item list-group-item-action active">
                            <span className="wbdv-module-item-title">Module 2 - React</span>
                            <button
                                className="btn wbdv-module-item-delete-btn float-right">
                                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                            </button>
                    </button>
                    <button type="button" className="list-group-item wbdv-module-item list-group-item-action">
                            <span className="wbdv-module-item-title">Module 3 - Redux</span>
                            <button
                                className="btn wbdv-module-item-delete-btn float-right">
                                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                            </button>
                    </button>
                    <button type="button" className="list-group-item wbdv-module-item list-group-item-action">
                            <span className="wbdv-module-item-title">Module 4 - Native</span>
                            <button
                                className="btn wbdv-module-item-delete-btn float-right">
                                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                            </button>
                    </button>
                    <button type="button" className="list-group-item wbdv-module-item list-group-item-action">
                            <span className="wbdv-module-item-title">Module 5 - Angular</span>
                            <button
                                className="btn wbdv-module-item-delete-btn float-right">
                                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                            </button>
                    </button>
                    <button type="button" className="list-group-item wbdv-module-item list-group-item-action">
                            <span className="wbdv-module-item-title">Module 6 - Node</span>
                            <button
                                className="btn wbdv-module-item-delete-btn float-right">
                                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                            </button>
                    </button>
                    <button type="button" className="list-group-item wbdv-module-item list-group-item-action">
                            <span className="wbdv-module-item-title">Module 5 - Mongo</span>
                            <button
                                className="btn wbdv-module-item-delete-btn float-right">
                                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                            </button>
                    </button>
            </div>
            <button className="btn wbdv-module-item-add-btn float-right">
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </button>
    </div>


export default ModuleList