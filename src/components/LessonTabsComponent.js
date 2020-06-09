import React from "react";
import {faUndo, faPlus, faTimes, faCheck, faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import CourseService from "../services/CourseService";

class LessonTabsComponent extends React.Component {

    state = {
        newLessonTitle: 'New Lesson',
        editingLesson: {},
        selectedLesson: {},
    }

    componentDidMount() {
        this.props.findLessonForModule(this.props.params.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.moduleId !== this.props.params.moduleId) {
            this.props.findLessonForModule(this.props.params.moduleId)
        }
    }


    render() {
        return (

            <div>
                <nav className="navbar navbar-expand-sm navbar-dark justify-content-between fixed-top nav-bg">
                    <div className="navbar-nav float-left">
                        <div className="float-left">
                            <Link to='/courses'>
                                <FontAwesomeIcon className="nav-item back-button" icon={faUndo}></FontAwesomeIcon>
                            </Link>
                            <span>         </span>
                            <a className="navbar-brand wbdv-course-title" href="#">
                                {this.props.params.courseId}
                            </a>
                        </div>
                    </div>

                    <div className="float-right">
                        <button className="navbar-toggler float-right" type="button" data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse float-right" id="navbarNavCourseEditor">
                            <ul className="navbar-nav mr-auto">
                                {
                                    this.props.lessons.map(lesson =>
                                        <li key={lesson._id}
                                            className="nav-item">
                                            {
                                                this.state.editingLesson._id !== lesson._id &&
                                                <span>
                                                    <button className={this.state.selectedLesson._id === lesson._id ?
                                                        "btn nav-link wbdv-lesson-tabs active" : "btn nav-link wbdv-lesson-tabs"}>
                                                         <Link to={`/editor/${this.props.params.courseId}/${this.props.params.moduleId}/lessons/${lesson._id}`}
                                                               className="link"
                                                               onClick={() => this.setState({selectedLesson:lesson})}>
                                                            {lesson.title}
                                                         </Link>
                                                     <button onClick={() => this.setState({editingLesson: lesson})}
                                                             className="btn nav-link wbdv-lesson-delete-btn float-right">
                                                        <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
                                                    </button>
                                                </button>
                                            </span>
                                            }
                                            {
                                                this.state.editingLesson._id === lesson._id &&
                                                <span>
                                                    <button className="btn nav-link wbdv-lesson-tabs active">
                                                     <input className="form-control"
                                                            onChange={(e) => {
                                                         const newTitle = e.target.value
                                                         this.setState(prevState => ({
                                                             editingLesson: {
                                                                 ...prevState.editingLesson,
                                                                 title: newTitle
                                                             }
                                                         }))}}
                                                            value={this.state.editingLesson.title}/>

                                                     <button className="btn nav-link wbdv-lesson-item-save-btn float-right"
                                                             onClick={() => {
                                                                 this.props.updateLesson(this.state.editingLesson._id, this.state.editingLesson)
                                                                 this.setState({editingLesson: {}})
                                                             }}>
                                                         <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                                     </button>

                                                    <button  onClick={() => this.props.deleteLesson(lesson._id)}
                                                             className="btn nav-link wbdv-lesson-item-delete-btn float-right">
                                                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                                                    </button>
                                                    </button>
                                            </span>
                                            }
                                        </li>
                                    )
                                }
                                <li className="nav-item">
                                    <button className="btn nav-link wbdv-lesson-add-btn"
                                            onClick={() => this.props.createLesson(
                                                this.props.params.moduleId, {
                                                    title: this.state.newLessonTitle
                                                })}>
                                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default LessonTabsComponent