import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseService from "../services/CourseService";
import CourseListNavBarComponent from "../components/CourseListNavBarComponent";

export default class CourseListContainer extends React.Component {
    state = {
        layout: this.props.match.params.layout,
        courses: [],
        newCourseTitle: "New Title"
    }

    componentDidMount() {
        CourseService.findAllCourses()
            .then(actualArrayOfCourses => this.setState({
                courses: actualArrayOfCourses
            }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.layout !== this.props.match.params.layout) {
            this.setState({
                layout: this.props.match.params.layout
            })
        }
    }

    setLayout = (layout) => {
        this.props.history.push(`/${layout}/courses`)
    }

    deleteCourse = (courseToDelete) =>
        CourseService.deleteCourse(courseToDelete._id)
            .then(status => this.setState(prevState => ({
                courses: prevState.courses.filter(course =>
                    course !== courseToDelete
                )
            })))

    render() {
        return (

            <div className="container">

                <CourseListNavBarComponent courses={this.state.courses}/>

                {
                    this.state.layout !== 'grid' &&
                    <div>
                        <CourseTableComponent
                            setLayout={this.setLayout}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </div>
                }
                {
                    this.state.layout === 'grid' &&
                    <div>
                        <CourseGridComponent
                            setLayout={this.setLayout}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </div>
                }

            </div>
        )
    }
}