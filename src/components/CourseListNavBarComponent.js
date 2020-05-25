import React from "react";
import CourseService from "../services/CourseService";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class CourseListNavBarComponent extends React.Component {

    addCourse = (title) =>
        CourseService.createCourse( {
            title : title,
            owner: 'me',
            modified: (new Date()).toDateString()
        })
            .then(theActualNewCourse =>
                this.setState( (prevState) => {
                        return {
                            courses: [...prevState.courses, theActualNewCourse]
                        }
                    }
                ))

    render() {
        return (
            <nav className="navbar fixed-top navbar-dark nav-bg">
                <div className="d-inline p-2">
                    <button className="navbar-toggler btn wbdv-hamburger" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand nav-item">
                        <label className="wbdv-label wbdv-course-manager">Course Manager</label>
                    </a>
                </div>
                <div className="d-inline p-2">
                    <form className="form-inline">
                        <input type="text"
                               onChange={(event) => this.setState(
                                   {
                                       newCourseTitle: event.target.value
                                   }
                               )}
                               className="wbdv-field wbdv-new-course nav-item form-control"
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