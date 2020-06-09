import React from "react";
import CourseCardComponent from "./CourseCardComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faSortAlphaDown} from "@fortawesome/free-solid-svg-icons";

export default class CourseGridComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6">Recent Documents</div>
                    <div className="col-4">Owned By Me</div>
                    <div className="col-2">
                        <button className="btn float-right">
                            <FontAwesomeIcon icon={faSortAlphaDown}></FontAwesomeIcon>
                        </button>
                        <button className="btn wbdv-button wbdv-grid-layout wbdv-list-layout float-right"
                                onClick={() => this.props.setLayout('table')}>
                            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
                <div className="row">
                    {
                        this.props.courses.map(course =>
                            <CourseCardComponent
                                setLayout={this.props.setLayout}
                                deleteCourse={this.props.deleteCourse}
                                key={course._id}
                                course={course}/>
                        )
                    }
                </div>
            </div>

        )
    }
}