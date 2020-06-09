import LessonService from "../services/LessonService";
import LessonTabsComponent from "../components/LessonTabsComponent"
import {connect} from "react-redux";
import ModuleService from "../services/ModuleService";

const stateToPropertyMapper = (state) => ({
    lessons: state.LessonReducer.lessons
})

const dispatchToPropertyMapper = (dispatch) => ({
    createLesson: (moduleId, newLesson) => {
        LessonService.createLesson(moduleId, newLesson)
            .then(actualLesson => dispatch({
                type: 'CREATE_LESSON',
                newLesson: actualLesson
            }))
    },
    findLessonsForModule: (moduleId) => {
        LessonService.findLessonForModule(moduleId)
            .then(actualLessons => dispatch({
                type: "FIND_LESSON_FOR_MODULE",
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