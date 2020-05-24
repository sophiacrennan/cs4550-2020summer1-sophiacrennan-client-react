import React from "react";
import ModuleListComponent from "./ModuleListComponent"
import LessonTabs from "./LessonTabsComponent";
import {Link} from "react-router-dom";

// stateless component (so not a container)
const CourseEditorComponent = () => {
    return (
        <div>
            <h2>Course Editor</h2>
            <Link to='../courses'>
                Back
            </Link>
            <div className="row">
                <h2>Course Editor</h2>
                <div className="col-4">
            <ModuleListComponent/>
                </div>
                <div className="col-8">
                    <LessonTabs/>
                    <h3>Topic Pills</h3>
                    <h3>Widget List</h3>
                </div>
            </div>
        </div>
    )
}

export default CourseEditorComponent