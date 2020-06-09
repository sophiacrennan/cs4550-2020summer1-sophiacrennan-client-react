import {connect} from "react-redux";
import ModuleListComponent from "../components/ModuleListComponent";
import ModuleService from "../services/ModuleService";

const stateToPropertyMapper = (state) => {
    return {
        modules: state.ModuleReducer.modules,
        newModuleTitle: state.ModuleReducer.newModuleTitle
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModuleForCourse: (courseId) => {
            ModuleService.findModuleForCourse(courseId)
                .then(modulesForTheCourse => dispatch({
                    type: 'FIND_MODULE_FOR_COURSE',
                    modules: modulesForTheCourse
                }))
        },
        findAllModules: () => {
            ModuleService.findAllModules()
                .then(actualModules => dispatch({
                    type: 'FIND_ALL_MODULES',
                    modules: actualModules
                }))
        },
        updateModule: (moduleId, newModuleData) => {
            ModuleService.updateModule(moduleId, newModuleData)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    updatedModule: newModuleData
                }))
            },

        deleteModule:(moduleId) => {
            ModuleService.deleteModule(moduleId)
                .then(status =>  dispatch({
                    type: 'DELETE_MODULE',
                    moduleId: moduleId
                }))
        },
        createModule:(courseId, newModule) => {
            ModuleService.createModule(courseId, newModule)
                .then(actualNewModule => dispatch({
                    type: "CREATE_MODULE",
                    newModule: actualNewModule

                }))
        }
    }
}

const ModuleListContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(ModuleListComponent)

export default ModuleListContainer