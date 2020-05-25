import React from "react";
import {Link} from "react-router-dom";
import CourseService from "../services/CourseService";
import { faTrash, faFileAlt, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class CourseRowComponent extends React.Component{

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

            <tr className={this.state.editing ? 'table-primary' : ''}>
                <td>
                    {
                    !this.state.editing &&
                        <Link to={`/editor/${this.state.course._id}`}>
                            <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                            <span className="link"> {this.state.course.title} </span>
                        </Link>
                    }

                    {this.state.editing &&
                        <input
                            className="form-control"
                            onChange={(event) => this.updateCourseTitle(event.target.value)}
                            value={this.state.course.title}/>
                    }
                </td>
                <td>{this.state.course.owner}</td>
                <td>{this.state.course.modified}</td>
                <td className="float-right">
                    {
                        this.state.editing &&
                        <button  className="btn btn-primary"
                            onClick={this.ok}>
                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                        </button>
                         }
                    { !this.state.editing &&
                    <span>
                        <button
                            className="btn btn-primary"
                            onClick={() => this.setEditing(true)}>
                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => this.props.deleteCourse(this.props.course)}>
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        </button>
                    </span> }
                </td>
            </tr>
        )
    }
}
