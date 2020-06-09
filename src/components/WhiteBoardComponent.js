import React from 'react'
import CourseListContainer from '../containers/CourseListContainer'
import CourseEditorComponent from "./CourseEditorComponent";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";
import ProfileComponent from "./ProfileComponent";
import SignUpComponent from "./SignUpComponent";

class WhiteBoardComponent extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>

                    <Route path='/login'
                           exact={true}
                           component={LoginComponent}/>

                    <Route path='/profile'
                           exact={true}
                           component={ProfileComponent}/>

                    <Route path='/signup'
                           exact={true}
                           component={SignUpComponent}/>

                    <Route path='/'
                           exact={true}
                           component={HomeComponent}/>

                    <Route path='/courses'
                           exact={true}
                           component={CourseListContainer}/>

                    <Route path='/:layout/courses'
                           exact={true}
                           component={CourseListContainer}/>

                    <Route path='/editor'
                           exact={true}
                           component={CourseEditorComponent}/>

                    <Route path={['/editor/:courseId', '/editor/:courseId/modules/:moduleId',
                        '/editor/:courseId/:moduleId/lessons/:lessonId', `/editor/:courseId/:moduleId/:lessonId/topics/:topicId`]}
                           exact={true}
                           component={CourseEditorComponent}/>


                </BrowserRouter>
            </div>
        )
    }
}

export default WhiteBoardComponent