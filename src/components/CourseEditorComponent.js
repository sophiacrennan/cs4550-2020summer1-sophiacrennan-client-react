import React from "react";
import ModuleListComponent from "./ModuleListComponent"
import LessonTabs from "./LessonTabsComponent";
// import {Link} from "react-router-dom";
import TopicPillsContainer from "./TopicPillsContainer";
import WidgetListContainer from "./WidgetListContainer";

// stateless component (so not a container...yet)
const CourseEditorComponent = () =>
        <div>
            <LessonTabs/>
            <div className="row">
                <div className="col-4">
                    <ModuleListComponent/>
                </div>
                <div className="col-8">
                    <TopicPillsContainer/>
                    <WidgetListContainer/>
                </div>
            </div>
        </div>

export default CourseEditorComponent