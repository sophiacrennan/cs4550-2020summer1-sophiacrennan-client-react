import React from "react";
import {Link} from "react-router-dom";
import CourseService from "../services/CourseService";
import {faTrash, faFileAlt, faEdit, faCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class CourseCardComponent extends React.Component{

    state = {
        editing: false,
        course: this.props.course
    }
    setEditing = (editing) =>
        this.setState({editing: editing})

    ok = () =>
        CourseService.updateCourse(
            this.state.course._id,
            this.state.course)
            .then(status => this.setEditing(false))

    updateCourseTitle = (newTitle) =>
        this.setState(prevState => ({
            course: {
                ...prevState.course,
                title: newTitle,
                // owner: prevState.course.owner,
                // modified: prevState.course.modified
            }
        }))


    render() {
         return (
            // <div className={this.state.editing ? 'table-primary' : ''}>
                <div className="card wbdv-card">
                    <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap"/>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                {this.state.editing &&
                                <input
                                    className="form-control"
                                    onChange={(event) => this.updateCourseTitle(event.target.value)}
                                    value={this.state.course.title}/>
                                } {
                                !this.state.editing &&
                                <Link to={`/editor/${this.state.course._id}`}>
                                    <span className="link"> {this.state.course.title} </span>
                                </Link>
                            } </h5>
                            <p className="card-text"><small className="text-muted">
                                <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                                {this.state.course.modified}</small>
                            </p>
                            <p className="float-right">
                                {
                                    this.state.editing &&
                                    <button  className="btn btn-primary mt-auto"
                                             onClick={this.ok}>
                                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                    </button>
                                }
                                { !this.state.editing &&
                                <span>
                        <button
                            className="btn btn-primary mt-auto"
                            onClick={() => this.setEditing(true)}>
                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                        </button>
                        <button
                            className="btn btn-danger mt-auto"
                            onClick={() => this.props.deleteCourse(this.props.course)}>
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        </button>
                    </span> }
                            </p>
                        </div>
                </div>

         )
    }
}
