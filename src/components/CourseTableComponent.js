import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {faTh} from "@fortawesome/free-solid-svg-icons";
import { faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class CourseTableComponent extends React.Component {
    render() {
        return (
            <div>
                <table className="table table-hover table-light">
                    <thead>
                    <tr className="table-secondary">
                        <th className="wbdv-header wbdv-title">Title</th>
                        <th className="wbdv-header wbdv-owner">Owned By</th>
                        <th className="wbdv-header wbdv-last-modified">Last Modified</th>
                        <th>
                            <button className="btn wbdv-button wbdv-grid-layout wbdv-list-layout float-right">
                                <FontAwesomeIcon icon={faTh}></FontAwesomeIcon>
                            </button>
                            <button className="btn float-right">
                                <FontAwesomeIcon icon={faSortAlphaDown}></FontAwesomeIcon>
                            </button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                            <CourseRowComponent
                                deleteCourse={this.props.deleteCourse}
                                key={course._id}
                                course={course}/>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}