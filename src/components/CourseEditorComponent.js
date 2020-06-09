import React from "react";
import WidgetListComponent from "./WidgetListComponent";
import ModuleListContainer from "../containers/ModuleListContainer";
import LessonTabContainer from "../containers/LessonTabContainer";
import TopicPillContainer from "../containers/TopicPillContainer";

const CourseEditorComponent = ({match}) =>
    <div>
        <LessonTabContainer {...match}/>
        <div className="row">
            <div className="col-4">
                <ModuleListContainer {...match}/>
            </div>
            <div className="col-8">
                <TopicPillContainer {...match}/>
                <WidgetListComponent/>
            </div>
        </div>
    </div>

export default CourseEditorComponent