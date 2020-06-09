import React from "react";
import CourseService from "../services/CourseService";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class CourseListNavBarComponent extends React.Component {

    addCourse = (title) =>
        CourseService.createCourse({
            title: title,
            owner: 'me',
            modified: (new Date()).toDateString()
        })
            .then(theActualNewCourse =>
                this.setState((prevState) => {
                        return {
                            courses: [...prevState.courses, theActualNewCourse]
                        }
                    }
                ))

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark nav-bg">
                <button className="navbar-toggler" type="button"
                        data-toggle="collapse" data-target="#navbarNavDropdown">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="navbar-brand" href="#">Course Manager</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <form className="form-inline">
                        <input type="text"
                               onChange={(event) => this.setState(
                                   {
                                       newCourseTitle: event.target.value
                                   }
                               )}
                               className="wbdv-field wbdv-new-course form-control"
                               placeholder="New Course Title"
                               aria-label="NewCourse"
                               aria-describedby="basic-addon1"/>
                        <button className="btn btn-danger my-2 my-sm-0 wbdv-button wbdv-add-course nav-item"
                                onClick={() => this.addCourse(this.state.newCourseTitle)}>
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        </button>
                    </form>
                </div>
            </nav>
        )
    }
}