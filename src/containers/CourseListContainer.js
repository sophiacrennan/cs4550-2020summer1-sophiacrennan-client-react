import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseService from "../services/CourseService";
export default class CourseListContainer extends React.Component{
    state = {
        layout: this.props.match.params.layout,
        courses: [
            // {_id:'123', title: 'cs4550', owner: "me", modified: '3/31/2020'},
            // {_id:'133', title: 'cs3500',owner: "myself", modified: '3/24/2020'},
            // {_id:'113', title: 'cs4670', owner: "I", modified: '2/17/2020'},
            // {_id:'183', title: 'cs4910', owner: "you", modified: '1/25/2020'},
        ],
        newCourseTitle: "New Title"
    }

    componentDidMount() {
        CourseService.findAllCourses()
            .then(actualArrayOfCourses => this.setState({
                courses: actualArrayOfCourses
            }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.layout !== this.props.match.params.layout) {
            this.setState({
                layout: this.props.match.params.layout
            })
        }
    }

    setLayout = (layout) => {
        // this.setState({
        //     layout: layout
        // })
        this.props.history.push(`/${layout}/courses`)
    }

    deleteCourse = (courseToDelete) =>
        CourseService.deleteCourse(courseToDelete._id)
            .then(status => this.setState(prevState => ({
                courses: prevState.courses.filter(course =>
                    course !== courseToDelete
                )
            })))

    addCourse = (title) =>
       CourseService.createCourse( {
            title : title,
                owner: 'me',
                modified: (new Date()).toDateString()
        })
           .then(theActualNewCourse =>
               this.setState( (prevState) => {
                       return {
                           courses: [...prevState.courses, theActualNewCourse]
                       }
                   }
               ))

    render() {
        return(
            <div>
                <h2>Course List {this.state.courses.length}</h2>
                <input
                    onChange={(event) => this.setState(
                        {
                            newCourseTitle: event.target.value
                        }
                    )}
                    value={this.state.newCourseTitle}
                       placeholder="Course Title"/>
                <button onClick={() => this.addCourse(this.state.newCourseTitle)}>
                    Add Course
                </button>
                {
                    this.state.layout === 'table' &&
                    <div>
                        <button onClick={() => this.setLayout('grid')}>
                            Grid
                        </button>
                        <CourseTableComponent
                            deleteCourse ={this.deleteCourse}
                            courses={this.state.courses}/>
                    </div>
                }
                {
                    this.state.layout === 'grid' &&
                        <div>
                            <button onClick={() => this.setLayout('table')}>
                                Table
                            </button>
                            <CourseGridComponent courses={this.state.courses}/>
                        </div>
                }

            </div>
        )
    }
}