import React from "react";
import ModuleListContainer from "../containers/ModuleListContainer";
import LessonTabContainer from "../containers/LessonTabContainer";
import TopicPillContainer from "../containers/TopicPillContainer";
import WidgetListContainer from "../containers/WidgetListContainer";

const CourseEditorComponent = ({match}) =>
    <div>
        <LessonTabContainer {...match}/>
        <div className="row">
            <div className="col-4">
                <ModuleListContainer {...match}/>
            </div>
            <div className="col-8">
                <TopicPillContainer {...match}/>
                {/*{*/}
                {/*    match.params.topicId &&*/}
                    <WidgetListContainer {...match}/>
                {/*}*/}

            </div>
        </div>
    </div>

export default CourseEditorComponent