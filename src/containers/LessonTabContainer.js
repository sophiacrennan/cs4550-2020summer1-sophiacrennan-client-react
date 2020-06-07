import LessonService from "../services/LessonService";
import LessonTabsComponent from "../components/LessonTabsComponent"
import {connect} from "react-redux";

const stateToPropertyMapper = (state) => ({
    lessons: state.LessonReducer.lessons
})

const dispatchToPropertyMapper = (dispatch) => ({
    createLesson: (moduleId, newLesson) => {
        LessonService.createLesson(moduleId, newLesson)
            .then(actualLesson => dispatch({
                type: 'CREATE_LESSON',
                newLesson
            }))
    },
    findLessonsForModule: (moduleId) => {
        LessonService.findLessonsForModule(moduleId)
            .then(actualLessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                actualLessons
            }))
    },
    deleteLesson: (lessonId) => {
        LessonService.deleteLesson(lessonId)
            .then(status =>  dispatch({
                type: "DELETE_LESSON",
                lessonId: lessonId
            }))
    },
    updateLesson: (lessonId, newLessonData) => {
        LessonService.updateLesson(lessonId, newLessonData)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                updatedLesson: newLessonData
            }))
    },
})

const LessonTabContainer = connect
(stateToPropertyMapper,dispatchToPropertyMapper)
(LessonTabsComponent)

export default LessonTabContainer