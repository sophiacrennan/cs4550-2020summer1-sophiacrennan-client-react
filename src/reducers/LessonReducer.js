const initialState = {
    newLessonTitle: 'Some Module',
    lessons: []
}

const LessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(
                    lesson => lesson._id !== action.lessonId)
            }
        case "FIND_LESSON_FOR_MODULE":
            return {
                ...state,
                lessons: action.actualLessons
            }
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [...state.lessons, action.newLesson]
            }
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(
                    lesson => lesson._id === action.updatedLesson._id ?
                        action.updatedLesson : lesson)
            }
            break;
        default:
            return state
    }
}

export default LessonReducer