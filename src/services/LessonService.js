const createLesson = (moduleId, newLesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001800938/modules/${moduleId}/lessons/`, {
        method: 'POST',
        body: JSON.stringify(newLesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const updateLesson = (lessonId, lesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001800938/lessons/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001800938/lessons/${lessonId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

const findAllLessons = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/001800938/lessons')
        .then(response => response.json())

const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001800938/modules/${moduleId}/lessons/`)
        .then(response => response.json())

export default {
    createLesson,
    deleteLesson,
    findLessonsForModule,
    findAllLessons,
    updateLesson
}