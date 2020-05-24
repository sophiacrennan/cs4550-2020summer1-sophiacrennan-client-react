import React from "react";
import CourseRowComponent from "./CourseRowComponent";

export default class CourseGridComponent extends React.Component {
    render() {
        return(
            <div>
                <h3>Course Grid{this.props.courses.length}</h3>
                <table>
                    <thead>
                        <th>Title</th>
                    <th>Owner</th>
                    <th>Last Modified</th>
                    <th>
                        <button>Sort</button>
                        <button>Grid</button>
                    </th>

                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                            <CourseRowComponent key={course._id}
                                                course={course}/>
                        )
                    }
                    </tbody>
                </table>
            </div>

        )
    }
}