import React from "react";

const initialState = {
    newModuleTitle: 'Some Module',
    modules: []
}

const moduleReducer = (state=initialState, event) => {
    switch (event.type) {
        case "UPDATE_MODULE":
            return {
                ...state,
                modules: state.modules.map(
                    module => module._id === event.updatedModule._id ?
                        event.updatedModule : module)
            }
            break;
        case "FIND_MODULE_FOR_COURSE":
            return {
                ...state,
                modules: event.modules
            }
            break;
        case "FIND_ALL_MODULES":
            return {
                ...state,
                modules: event.modules
            }
            break;
        case "CREATE_MODULE":
            return {
                modules: [
                    ...state.modules,
                    event.newModule
                ]
            }
            break;
        case "DELETE_MODULE":
            return {
                modules: state.modules.filter(module => module._id !== event.moduleId)
            }
            break;
        default:
            return state;
    }

}

export default moduleReducer