import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTimes, faPencilAlt, faCheck} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class ModuleListComponent extends React.Component {
    state = {
        newModuleTitle: 'New Module',
        editingModule: {},
        selectedModule: {}
    }

    componentDidMount() {
        this.props.findModuleForCourse(this.props.params.courseId)
    }

    render() {
        return (
            <div className="module-list">
                <div className="list-group wbdv-module-list">
                    {

                        this.props.modules.map(module =>
                            <div key={module._id}>
                                {
                                    this.state.editingModule._id !== module._id &&
                                    <span>
                                                 <button type="button"
                                                         className={this.state.selectedModule._id === module._id ?
                                                             "list-group-item wbdv-module-item list-group-item-action active" : "list-group-item wbdv-module-item list-group-item-action"}
                                                         key={module._id}>
                                                    <span className="wbdv-module-item-title">
                                                        <Link
                                                            to={`/editor/${this.props.params.courseId}/modules/${module._id}`}
                                                            className="mod-link"
                                                            onClick={() => this.setState({selectedModule: module})}>
                                                            {module.title}
                                                        </Link>
                                                    </span>
                                                    <button onClick={() => this.setState({
                                                        editingModule: module,
                                                        selectedModule: module
                                                    })}
                                                            className="btn wbdv-module-item-edit-btn float-right">
                                                        <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
                                                    </button>
                                                 </button>
                                            </span>
                                }
                                {
                                    this.state.editingModule._id === module._id &&
                                    <span>
                                                 <button type="button"
                                                         className={this.state.selectedModule._id === module._id ?
                                                             "list-group-item wbdv-module-item list-group-item-action active" : "list-group-item wbdv-module-item list-group-item-action"}
                                                         key={module._id}>
                                                     <input className="form-control"
                                                            onChange={(e) => {
                                                                const newTitle = e.target.value
                                                                this.setState(prevState => ({
                                                                    editingModule: {
                                                                        ...prevState.editingModule,
                                                                        title: newTitle
                                                                    }
                                                                }))
                                                            }}
                                                            value={this.state.editingModule.title}/>

                                                     <button className="btn wbdv-module-item-save-btn float-right"
                                                             onClick={() => {
                                                                 this.props.updateModule(this.state.editingModule._id, this.state.editingModule)
                                                                 this.setState({editingModule: {}})
                                                             }}>
                                                         <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                                     </button>

                                                    <button onClick={() => this.props.deleteModule(module._id)}
                                                            className="btn wbdv-module-item-delete-btn float-right">
                                                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                                                    </button>
                                                 </button>
                                            </span>
                                }
                            </div>
                        )
                    }

                    <button className="btn wbdv-module-item-add-btn float-right"
                            onClick={() => this.props.createModule(
                                this.props.params.courseId, {
                                    title: this.state.newModuleTitle,
                                })}>
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        )
    }
}

export default ModuleListComponent