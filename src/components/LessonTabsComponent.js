import React from "react";
// import {render} from "react-dom";
import {faUndo, faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const LessonTabs = () => {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark justify-content-between fixed-top nav-bg">
                    <div className="navbar-nav col-4">
                        <div className="float-left">
                            <Link to='../courses'>
                                <FontAwesomeIcon className="link" icon={faUndo}></FontAwesomeIcon>
                            </Link>
                            <a className="navbar-brand wbdv-course-title" href="#">CS4550 - WebDev</a>
                        </div>
                    </div>

                    <div className="col-8">
                        <button className="navbar-toggler float-right" type="button" data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse float-right" id="navbarNavCourseEditor">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item"><a className="nav-link wbdv-lesson-tabs" href="#">Build</a>
                                </li>
                                <li className="nav-item active"><a className="nav-link wbdv-lesson-tabs"
                                                                   href="#">Pages</a>
                                </li>
                                <li className="nav-item"><a className="nav-link wbdv-lesson-tabs" href="#">Theme</a>
                                </li>
                                <li className="nav-item"><a className="nav-link wbdv-lesson-tabs" href="#">Store</a>
                                </li>
                                <li className="nav-item"><a className="nav-link wbdv-lesson-tabs" href="#">Apps</a></li>
                                <li className="nav-item"><a className="nav-link wbdv-lesson-tabs" href="#">Settings</a>
                                </li>
                                <li className="nav-item"><a className="nav-link wbdv-lesson-add-btn" href="#">
                                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
}

export default LessonTabs