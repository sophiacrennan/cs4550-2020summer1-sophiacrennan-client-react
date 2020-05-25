import React from 'react'
import CourseListContainer from '../containers/CourseListContainer'
import CourseEditorComponent from "./CourseEditorComponent";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";

class WhiteBoardComponent extends React.Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    {/*<h1>WhiteBoard</h1>*/}

                    <Route path='/login'
                           exact={true}
                           component={LoginComponent}/>

                           {/*TODO: port over registration,profile components*/}

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

                </BrowserRouter>
            </div>
        )
    }
}

export default WhiteBoardComponent