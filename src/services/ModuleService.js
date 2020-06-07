const createModule = (courseId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001800938/courses/${courseId}/modules/`, {
        method: 'POST',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const updateModule = (moduleId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001800938/modules/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001800938/modules/${moduleId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

const findAllModules = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/001800938/modules')
        .then(response => response.json())

const findModuleForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001800938/courses/${courseId}/modules/`)
        .then(response => response.json())

export default {
    createModule,
    deleteModule,
    findModuleForCourse,
    findAllModules,
    updateModule
}